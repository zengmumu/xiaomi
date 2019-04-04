<template>
  <div class="home content has-tabs">
    <div class="bar-header row">
        <div class="col col-20 tac">logo</div>
        <div class="col">
          <input type="text">
        </div>
        <div class="col col-20 tac">user</div>
    </div>
    <div class="sub-header row nowrap ofvisible-x fsmall"> 
      <div class="iblock plr16" v-for="item in tabs" :key="item.page_id"> {{item.name}}</div>
    </div>
    <div class="content has-header has-sub">
      <swiper :gallery="gallery" v-if="gallery.length"></swiper>
     <div class="row nopadding">
        <div class="col" v-for="item in cat" :key="item.material_id">
          <img :src="item.img_url" alt="" width="100%">
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import swiper from "./../../components/swiper/swiper.vue"
export default {
  name: 'home',
  data() {
    return {
      pageData:null, //页面数据
      tabs:null,//分类导航
      gallery:[],//幻灯片数据
    }
  },
  components: {
    swiper,
  },
  created(){
    this.getPageData();
    //获取页面的数据
  },
  methods:{
    // 通过接口获取首页的数据
    getPageData(){
      this.$http.get("https://biger.applinzi.com/page.php")
      .then(xhr=>{
        this.pageData = xhr.data;
        this.tabs = xhr.data.data.tabs;
        this.gallery= xhr.data.data.data.sections[0].body.items;
        this.cat = xhr.data.data.data.sections[1].body.items;
        console.log(this.tabs,this.gallery);
      })
    }
  }
}
</script>
