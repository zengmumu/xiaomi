import Vue from 'vue'
import Vuex from 'vuex'
import axios from  'axios'

Vue.use(Vuex)
// vuex 用来vue里面组件数据与状态共享
export default new Vuex.Store({
  // state vuex 的状态  相当于 vue组件里面data数据
  state: {
    goods:[{name:'小米7',price:488},{name:'小米8',price:588},{name:'小米9',price:999}],
  },
  // mutations vuex的方法 用来改变状态，相当于与vue组件的 方法（不能异步，不能用ajax）
  mutations: {
   addToCart:function(state,data){
     // 添加cart之前 看 good_id 有没有，有就更新没有就添加
     var canAdd =true; // 是否允许添加
     state.goods.forEach(item=>{
       // 如果这个商品的id存在
       if(item.goods_id==data.goods_id){
         // 那么就 只需要数量添加
        item.num= parseInt(item.num)+ parseInt(data.num);
         if(item.num>item.buy_limit){ 
           // 添加的数据大于购买的数量 提示 并 设置为最大值
           alert("本件商品最多可以购买"+item.buy_limit)
           item.num = item.buy_limit
          }
        canAdd = false; // 不让添加
        }
     })
     if(canAdd){ //如果可以 把新的数据 添加到 goods
      state.goods.push(data);
     }
     // 向服务发送数据 告诉服务器已经更改了购物车 
   },
   initCart:function(state,data){
    state.goods = data;
   },
   // 删除购物数据
   deleteCart:function(state,data){
    let sure = window.confirm("你确定要删除吗?");
    if(sure){
      let index = state.goods.indexOf(data);
      state.goods.splice(index,1);
    }
   }

  },
  // actions vuex里面的方法用来触发 mutations 可以异步，理解为 vue组件的方法
  actions: {
    getGoods:function(context){
      axios.get("https://biger.applinzi.com/cart.php")
      .then(xhr=>{
       context.commit("initCart",xhr.data);
      })
    }
  },
  // getters 通过现有数据计算出新的数据，相当于vue组件里面的 computed
  getters:{
    cartNum:function(state){
      var num = 0;
     state.goods.forEach(item=>{
       num+=item.num;
     })
     return num;
    }
  }
})
