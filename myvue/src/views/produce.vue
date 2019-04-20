<template>
    <div>
        <div class="bar-header row nopadding">
            <a href="" class="btn">后退</a>
             
            <a href="" class="btn">分享</a>
        </div>
        <div class="content has-header has-tabs"  v-if="gallery.length">
                <swiper :gallery="gallery" v-if="gallery.length"></swiper>
                <h2>{{product_info.name}}</h2>
                <p class="fsmall">{{product_info.product_desc}}</p>
                <h2>{{goods_info[0].price}}</h2>
        </div>
        <div class="tabs row">
            <div class="col-20">首页</div>
            <div class="col-20">购物车</div>
            <div class="col-20"></div>
            <div class="col-40" @click="showSuk=true">加入购物车</div>
        </div>
        <div class="div full">
            <div class="mask full">
                
            </div>
            <div class="sku-body full bg " v-if="gallery.length">
                <div class="suk-header row">
                    <div class="col-30"><img width="100%" :src="selectPro.img_url" alt=""></div>   
                    <div class="col">
                        <h3>{{selectPro.price}}</h3>
                        <p>{{selectPro.name}}</p>
                    </div> 
                </div>
                <div class="suk-content full">
                     <h3>{{buy_option[0].name}}</h3>
                     <div  @click="setCtype(type.prop_value_id)"  class="bo " v-for="type in buy_option[0].list" :key="type.prop_value_id">
                        <span>{{type.name}}</span> <span>{{type.price}}</span>
                     </div>
                     <h3>{{buy_option[1].name}}</h3>
                     
                    <span class="bo"  @click="setCcolor(color.prop_value_id)"  v-for="color in colors" :key="color.prop_value_id">{{color.name}}</span>
                    {{ccolor}}||{{ctype}}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import swiper from './../components/swiper/swiper.vue'
export default {
    data() {
        return {
            galleryView:[],
            product_info:{},
            goods_info:[],
            showSuk:false,
            buy_option:[],
            ccolor:null,
            ctype:null,
                }
    },
    created(){
        this.getGood();
    },
    computed:{
        gallery:function(){
            return this.galleryView.map((item,index)=>{
               return( {material_id:index,img_url:item})
            })
        },
        selectPro:function(){
            // return this.goods_info[0]
            var pro={};
            this.goods_info.forEach(item=>{
                if(item.prop_list[0].prop_value_id==this.ctype&&item.prop_list[1].prop_value_id==this.ccolor){
                    pro=item;
                }
            })
            // console.log(pro);
            return pro ;
        },
        colors:function(){
            var arr=[];
            this.goods_info.forEach(item=>{
                if(this.ctype==item.prop_list[0].prop_value_id){
                   this.buy_option[1].list.forEach(item1=>{
                       if(item1.prop_value_id==item.prop_list[1].prop_value_id){
                           arr.push(item1);
                       }
                   })
                }
            })
            return arr;
        }
    },
    methods:{
        getGood(){
            this.$http.get("https://biger.applinzi.com/product.php?id="+this.$route.params.id)
            .then((xhr)=>{
                this.galleryView = xhr.data.data.view_content.galleryView.galleryView;
                this.product_info = xhr.data.data.product_info;
                this.goods_info = xhr.data.data.goods_info;
                this.buy_option = xhr.data.data.buy_option;
                this.ctype=this.goods_info[0].prop_list[0].prop_value_id,
                this.ccolor=this.goods_info[0].prop_list[1].prop_value_id   
                console.log(this.ctype,this.ccolor)
            })
        },
        setCtype(id){
            this.ctype = id;
            // console.log(id);
        },
         setCcolor(id){
            this.ccolor = id;
            // console.log(id);
        }
    },
    components:{
        swiper,
    }
    
}
</script>
<style lang="less">
    .mask{ background-color: rgba(0,0,0,.3)}
    .sku-body {
        top:150px;
        border-radius: 6px;
    }
    .suk-header{
        height: 150px;
    }
    .suk-content{
        overflow: auto;
        top:150px;
    }
</style>
