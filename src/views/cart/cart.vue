<template>
    <div v-if="goods.length">
      <van-nav-bar :fixed="true" title="购物车" left-text="" left-arrow  @click-left="$router.go(-1)">
        <van-icon name="search" slot="right" />
     </van-nav-bar>
     <div class="content has-header has-tabs   bg  ofvisible-y" >
        <div class="row" v-for="good in goods" :key="good.goods_id" >
            <div class="col-10 col-center tac">
                <van-checkbox v-model="check" checked-color="#f30"></van-checkbox>
            </div>
            <div class="col-30 padding">
                <img :src="good.image_url" width="100%" alt="">
            </div>
            <div class="col padding">
                <h4>{{good.name}}</h4>
                <p>售价:{{good.price}}</p>
                <div class="row">
                    <div class="col-90">
                    <van-stepper v-model="good.num" :max="good.buy_limit"  />
                    </div>
                    <div class="col-10 tar"> <van-icon name="delete" @click="deleteCart(good)"/></div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { NavBar,Icon, Checkbox,Stepper } from 'vant';
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
           check:true
        }
    },
    components:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Checkbox.name]: Checkbox,
        [Stepper.name]: Stepper
        },
    created(){
        // this.initGoods();
    },
    methods: {
       ...mapMutations(["deleteCart"])
    },
    computed:{
        ...mapState(["goods"])
    }
}
</script>
<style lang="less">
    .van-nav-bar .van-icon{
        color:gray;
        font-size: 14px;
    }
</style>