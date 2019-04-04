<template>
    <div id="category" class="full has-tabs">
       <div class="bar-header row bg-gray">
           <a @click="$router.go(-1)" class="btn">返回</a>
           <div class="col-100 tac fbig">分类</div>
           <a class="btn">搜索</a>
       </div>
       <div class="content has-header row bg nopadding">
           <div class="col col-20 tac ofvisible-y">
               <div class="item bob" v-for="item in cateData" :key="item.category_id">{{item.category_name}}</div>
           </div>
           <div class="col col-80 bol ofvisible-y" >
               <!-- 大分类 -->
               <div class="cate" v-for="item in cateData" :key="item.category_id" >
                    <!-- 中分类 -->
                    <div 
                    class="category_list"
                    v-for="(list,index) in item.category_list"
                    :key="index"
                    >
                        <div v-if="list.view_type=='cells_auto_fill'">
                            <img :src="list.body.items[0].img_url" width="100%" alt="">
                        </div>
                        <div 
                        class="tac"
                        v-if="list.view_type=='category_title'">
                            --{{list.body.category_name}}--
                        </div>
                        <div 
                        class="tac  row row-wrap"
                        v-if="list.view_type=='category_group'">
                            <!-- 商品列表 -->
                            <div 
                            class="col col-33"
                            v-for="produce in list.body.items"
                            :key="produce.product_name"
                             >
                             <a href="" class="block fxsmall " >
                                 <img :src="produce.img_url"
                                 width="100%"
                                 alt="">
                                 <span class="block thidden ">
                                     {{produce.product_name}}
                                 </span>
                             </a>
                             </div>
                            <!-- 商品列表 -->
                        </div>
                        
                        
                    </div>     
                    <!-- 中分类 -->
               </div>
               <!-- 大分类 -->
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cateData:[]
        }
    },
    created(){
        this.getCateData();
    },
    methods:{
        getCateData(){
            this.$http.get("https://biger.applinzi.com/category.php")
            .then(xhr=>{
                this.cateData=xhr.data.data;
                console.log(this.cateData);
            })
        }
    }
}
</script>