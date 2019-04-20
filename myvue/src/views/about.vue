<template>
    <div>
        <h1>new</h1>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
        关于页面
        <div>
            <img :src="item.coverImage" width="100%" v-for="(item,index) in plist" :key="index" alt="">
        </div>
        <div v-for="item in joks" :key="item.id">
                <h3>{{item.title}}</h3>
                <p>{{item.summary}}</p>
                <hr>
        </div>
        <button @click="more()" class="btn btn-block btn-blue">more</button>
    </div>
</template>
<script>
import { NavBar,Icon} from 'vant';

export default {
    data() {
        return {
            joks:[],
            page:0,
            plist:[]
        }
    },
    methods: {
        getJok(){
            this.$http.get("https://biger.applinzi.com/duan/jok.php?page="+this.page)
            .then((res)=>{
                console.log(res.data.result)
                this.joks = res.data.result.concat(this.joks);
            },(err)=>{
                console.log(err);
            })
        },
        more(){
            this.page++;
            this.getJok();
        },
        getCon(){
            this.$http.get("https://api.hongbeibang.com/re")
            .then(xhr=>{
                this.plist = xhr.data.data.data;
            })
        }
    },  
    created(){
        this.getJok();
        this.getCon();
    },
    components:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon
    }
}
</script>
<style lang="less">
    .btn{ 
        border:1px solid #fafafa; 
        background-color: #f0f0f0;
        border-radius: 4px;
        line-height:38px;
        padding: 0 24px;
        font-size: 17px;
        }
    .btn-block{
        width: 100%;
        display: block;
    }
    .btn-blue{
        background-color: rgb(20, 82, 218);
        color:#fff;
    }
</style>