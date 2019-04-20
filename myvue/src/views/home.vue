<template>
    <div>
        首页页面
        <div class="com" v-if="comment.length">
            <div v-for="(item,index) in comment" :key="index">
                    <h3>{{item.title}}</h3>
                    <img :src="item.pic" alt="" width="25%">
            </div>
        </div>
        <div v-if="newClass&&newClass.item">
                <div  v-for="item in newClass.item" :key="item.contentId">
                <img :src="item.image" alt="" width="100%">
                </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            newClass:{},
            comment:[]
        }
    },
    created(){
        this.getHomeData();
        this.getComment();
    },
    methods:{
        getHomeData(){
            this.$http.get("https://api.hongbeibang.com/education/getIndex")
            .then(xhr=>{
                    console.log(xhr.data);
                    this.newClass = xhr.data.data.category[0];
            })
        },
        getComment(){
            this.$http.get("http://www.mysite/comment")
            .then(xhr=>{
                this.comment = xhr.data.data;
            })
        }
    }
}
</script>