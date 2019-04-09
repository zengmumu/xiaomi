<template>
  <div id="app">
   
        <keep-alive include="home,category,cart">
        <router-view />    
        </keep-alive>
   
    
    <div class="tabs row tac" v-show="isTabs" >
      <router-link  class="col"  to="/">首页</router-link>
      <router-link  class="col" to="/category">分类</router-link>
      <router-link  class="col" to="/cart">购物车({{cartNum}})</router-link>
      <router-link  class="col" to="/user">我 的</router-link>

    </div>
  </div>
</template>
<script>
import bus from './bus.js'
// 导入 vuex里面的映射方法 能够把 vuex里面的方法和数据映射到 vue当前组件里面（快捷）
// mapState,mapGetters 再computed 成为数据
// mapMutations mapActions 在methods 里面成为方法
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return { isTabs:true}
  },
  created(){
     this.isTabs = bus.isTabs;
    bus.$on("showTabs",(e)=>{
      console.log("is");
      this.isTabs = e||bus.isTabs;
    })
    this.getGoods();
  },
  methods: {
    ...mapMutations(["addToCart"]),
    ...mapActions(['getGoods']),
    showTabs(e){
      console.log(e,"showtabs");
    }
  },
  computed:{
    ...mapState(["goods"]),
    ...mapGetters(["cartNum"]),
   
  }
}
</script>

<style lang="less">
/*****变量 **/
// 主要颜色
@primary:#ff6700;

// 文字颜色
@tcolor:#999999;


// 背景颜色
@bg-color:#f2f2f2;


// 文字大小
@f-size:.13rem;
.fbig{
 font-size:.17rem;
}
.fsmall{
  font-size:.11rem;
}
.fxsmall{
  font-size:.08rem;
}

/*********** body***********/
body{
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: @f-size;
  background-color: #fff;
  color:@tcolor;
}
/*********** 栅格系统***********/
.row{ display: flex; width:100%; padding: 8px; box-sizing: border-box;}
.row-wrap{
  flex-wrap: wrap;
}
.row-center{ align-items: center;}
.row-right{ align-items: flex-end}
.row-left{ align-items: flex-start}
.col{ flex:1; }
.col-top{ align-self: flex-end}
.col-center{ align-self: center}
.col-bottom{ align-self: flex-end}
.col-10{ flex:0 0 10%;}
.col-20{ flex:0 0 20%;}
.col-30{ flex:0 0 30%;}
.col-40{ flex:0 0 40%;}
.col-50{ flex:0 0 50%;}
.col-60{ flex:0 0 60%;}
.col-70{ flex:0 0 70%;}
.col-80{ flex:0 0 80%;}
.col-90{ flex:0 0 90%;}
.col-100{ flex:0 0 100%; max-width:100%}
.col-33{ flex:0 0 33.3%; max-width:33.3%; box-sizing: border-box;}
.col-66{ flex:0 0 66.7%; max-width:66.7%}
.col-25{ flex:0 0 25%;max-width:25%}


/*********** 定位系统***********/
.pr{ position: relative;}
.pa{ position: absolute;}
.pf{ position: fixed;}
.full{ .pa;
      left:0;
      top:0;
      right:0;
      bottom:0;
      }
/*********** 模  块 ***********/  
.item{line-height: .44rem;}
.item-s{line-height:.38rem;}
.tabs{ 
  .pf;
  height:.49rem;
  bottom:0;
  background-color: #fff;
  box-shadow: 0 -5px 15px rgba(220,220,220,.3);
  }
.content{
  .full;
  background-color: @bg-color;
}

.has-tabs{
  bottom: 49px;
 
}
.has-header{
  top: 44px;
}
.has-sub{
 top: 88px;
}

.bar-header{
  .pf;
  height: 44px;
 
  top:0;
  left:0;
  z-index: 100;
  .btn:nth-of-type(1){
    .pa;
    left:0;
    top:0;
    border:none;
  }
  .btn:nth-of-type(2){
    .pa;
    right:0;
    top:0;
     border:none;
  }
}
.sub-header{
  .bar-header;
  top:44px;

}
.btn{
  line-height: .44rem;  
 .plr16;
  border:1px solid #f2f2f2;
  border-radius: 0.06rem;
  .iblock;
}
.btn-primary{
  .btn;
  border:none;
  color:#fff;
  background-color:@primary;
}
.item{
  line-height: 0.44rem;
}
/*********** 圆角 ***********/  
.r8{border-radius: .08rem;}
.round-top{
border-radius:.08rem .08rem 0 0; }
.round{
  border-radius:.44rem;
}
/*********** 文字对齐 ***********/  
.tac{ text-align: center;}
.tar{ text-align: right;}
.thidden{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*********** 默认控件 ***********/  
input[type=text]{
  border:none;
  display: block;
  width: 100%;
  line-height: 28px;
}
/*********** display ***********/  
.block{ display: block};
.iblock{ display: inline-block}
.nowrap{ white-space: nowrap;}
.ofhidden{ overflow: hidden;}
.ofhidden-x{ overflow-x:hidden;}
.ofvisible-x{ overflow-x:auto;}
.ofvisible-y{ overflow-y:auto;}
/*********** padding ***********/  
.padding{padding:8px;}
.plr{ padding-left: 8px; padding-right: 8px;}
.plr16{ padding-left: 16px; padding-right: 16px;}
.nopadding{ padding: 0;}
/***********border ***********/  
.bo{border:1px solid #f0f0f0;}
.bol{border-left:1px solid #f0f0f0;}
.bor{border-right:1px solid #f0f0f0;}
.bot{border-top:1px solid #f0f0f0;}
.bob{border-bottom:1px solid #f0f0f0;}
.bono{border:none;}
/***********background ***********/  
.bg{ background-color: #fff;}
.bg-gray{ background-color: @bg-color}
.bg-t{ background-color: transparent;}
.bg-primary{ color:#fff;background-color:@primary;}
/***********弹出框 ***********/ 
.suk{
  z-index:300;
}
.mask{
  background-color: rgba(0,0,0,.7);
  z-index: 900;
}
.suk-content,
.suk-body{
  top:1.5rem;  
  z-index: 900;
  
}
.suk-body{
  bottom:.49rem;
}
.suk-head{
  height: 1.5rem;
}
.suk-foot{
  height: .56rem;
  position: absolute;
  left:0;
  bottom:0;
  width: 100%;
}

</style>
