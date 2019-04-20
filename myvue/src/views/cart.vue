<template>
    <div>
       
                <van-nav-bar title="标题" left-text="返回" left-arrow>
                     <van-icon name="search" slot="right" />
                </van-nav-bar>
        
        <div class="content has-tabs has-header">
                <div class="row bg" v-for= "good in goods" :key="good.goods_id">
                    <div class="col-10 col-center"><van-checkbox v-model="checked" checked-color="#ff3300"></van-checkbox></div>
                    <div class="col-30"><img width="100%" :src="good.image_url" alt=""></div>
                    <div class="col-50">
                        <h3>{{good.name}}</h3>
                        <p>{{good.price}}</p>
                        <div><van-stepper v-model="good.num" :max="good.buy_limit"/></div>
                    </div>
                    <div class="col-10 col-bottom"><van-icon name="delete" /></div>
                </div>
        </div>
        <div class="tabs row nopadding">
           <div class="col">1196</div>
           <div class="col tac">继续购物</div>
           <div class="col tac bg-primary">去结算</div> 
        </div>
        
    </div>
</template>
<script>
import { NavBar,Icon,Checkbox, Stepper} from 'vant';
export default {
    components:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Checkbox.name]:Checkbox,
        [Stepper.name]:Stepper,
    },
    data() {
        return {
            checked:true,
            val:true,
            goods:[]
        }
    },
    created(){
        this.getGoods();
    },
    methods:{
        getGoods(){
            this.$http.get("http://biger.applinzi.com/cart.php")
            .then(res=>{
                this.goods= res.data;
            })
        }
    }
}
</script>
<style lang="less">
</style>
