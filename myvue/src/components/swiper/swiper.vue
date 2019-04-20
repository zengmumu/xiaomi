<template>
    <div ref="sw">
        <div class="slide" v-for="item in gallery" :key="item.material_id">
            <img :src="item.img_url" alt="">
        </div>
    </div>
</template>
<script>
import Swiper from "./swiper.js"

export default {
    props:["gallery"],
    created(){
        //页面渲染完就开始幻灯片
       this.$nextTick(()=>{
        new Swiper({dom:this.$refs.sw}) 
       })
          
      
           
    }
    
   
}
</script>