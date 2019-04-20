<template>
    <div>
        <input type="text" v-model="u.uname">
        <br>
        <input type="password" v-model="u.upass">
        <button @click="login()">登录</button>
    </div>
</template>
<script>
import bus from "./../bus.js"
export default {
    
    data() {
        return {
            u:{uname:'',upass:''}
        }
    },
    methods:{
        login(){
            this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:"POST",
					withCredentials:true,//本地cookie 发送给服务器，让服务session知道我的登录状态
					data:`fmdo=login&dopost=login&userid=${this.u.uname}&pwd=${this.u.upass}`,
                })
            .then((res)=>{
                console.log(res);
                bus.setTocken(res.data.tocken)
              
              
                if(this.$route.query.redirect){
                   var str = this.$route.query.redirect;
                   
                    this.$router.push(str);
                }else{
                    this.$router.push("/home")
                }
               
            })
        }
    }
    
}
</script>
<style lang="less">
    
</style>