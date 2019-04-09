<template>
    <div>
       <div class="bar-header bg-t full">
           <span @click="$router.go(-1)" class="btn">返回</span>
           <span class="btn">搜索</span>
       </div>
        <!-- 当galley有长度才显示，如果没有说明ajax还没有获取到 -->
        <swiper :gallery="gallery" v-if="gallery.length"></swiper>
        <div class="titleView plr">
            <h1>{{titleView.name}}</h1>
            <p class="fsmall" v-html="titleView.product_desc"></p>
            <h1>{{titleView.price}}</h1>
        </div>
        <div class="pro-tabs pa padding">
            <div class="row padding r8">
                <div class="col-20 tac"><router-link to="/"> 首页</router-link></div>
                <div class="col"> <router-link to="/cart">购物车</router-link>  </div>
                <div class="col-40 ">
                    <div class="bg-primary round tac" @click="isShowSuk=true">加入购物车</div>
                </div>
            </div>
        </div>
        <div class="suk" v-show="isShowSuk">
            <div class="mask full"  @click="isShowSuk=false"></div>
            <div class="suk-content bg full round-top" v-if="goods_info.length">
               <div class="suk-head ">
                  <div class="row padding">
                     <div class="col-30 padding">
                        <img :src="goods_info[0].img_url" width="100%" alt="">
                     </div>
                     <div class="col">
                         <h1>{{goods_info[0].price}}</h1>
                         <p>{{goods_info[0].name}}</p>
                     </div>
                  </div>
               </div> 
               <div class="suk-body full ofvisible-y padding">
                  <h2>{{buy_option[0].name}}</h2>
                  <div class="row nopadding bo" v-for="item in buy_option[0].list" :key="item.prop_value_id">
                    <div class="col item ">{{item.name}}</div>
                    <div class="col item">{{item.price}}</div>
                  </div>
                   <h2>{{buy_option[1].name}}</h2>
                   <div>
                        <span class="bo" v-for="item in buy_option[1].list" :key="item.prop_value_id">
                            {{item.name}}                   
                         </span>
                   </div>
                  
                   
               </div>
               <div class="suk-foot padding ">
                   <div class="bg-primary round item-s tac"  @click="addCart">加入购物车</div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import bus from "./../../bus.js"
import swiper from "./../../components/swiper/swiper.vue";
import {mapMutations} from 'vuex';
export default {
    beforeRouteEnter (to, from, next) {
        // 进入路由发送一个showTabs事件
        bus.isTabs = false;
        bus.$emit("showTabs",false);
        
        next(true);// 路由守卫必须有next 
    },
    beforeRouteLeave (to, from, next) {
        // 离开路由发送一个showTabs事件
         bus.isTabs = true;
        bus.$emit("showTabs",true);
       
        next(true);
    },
    data() {
        return {
            galleryView:[],
            titleView:{},
            goods_info:[],
            isShowSuk:false,
        }
    },  
    created() {
        // 获取产品页面数据
        this.getProduce();
    },
    methods: {
        ...mapMutations(["addToCart"]),
        getProduce(){
            this.$http.get("http://biger.applinzi.com/product.php?id="+this.$route.params.id)
            .then(xhr=>{
                // xhr.data就是返回的数据
                console.log(xhr.data);
                this.galleryView = xhr.data.data.view_content.galleryView.galleryView;
                this.titleView = xhr.data.data.view_content.titleView.titleView;
                this.goods_info= xhr.data.data.goods_info;
                this.buy_option= xhr.data.data.buy_option;
                // console.log(this.galleryView);// 幻灯片的数据
            })
        },
        addCart(){
            //关闭suk
            this.isShowSuk=false;
            // 简介写法
            var g = this.goods_info[0];
            // 数据对应
            var good = {buy_limit:g.buy_limit,
                        goods_id: g.goods_id,
                        image_url:g.img_url,
                        name:g.name,
                        num: 1,
                        price: g.price,
                        server_time:new Date().getTime()
                        }
            console.log(good);
            // 执行addToCart 通过mapmutations获取的。
            this.addToCart(good)
        },
    },
    computed:{
        //重新计算出 gallery 需要的数据类型
        gallery:function(){
          return this.galleryView.map((item,index)=>{
               return ({img_url: item, material_id: index})
          })  
        }
    },
    components:{swiper}
}
</script>
<style lang="less">
    .pro-tabs{
        left:0;
        bottom:0;
        width: 100%;
        .row.padding{
            line-height: 35px;
            box-shadow: 0 0 10px rgba(200,200,200,.7);
        }
    }

</style>
