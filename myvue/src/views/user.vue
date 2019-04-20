<template>
    <div>
        <button @click="logout()" v-if="bus.getTocken()">退出</button>
        用户界面
        {{user}}
        
    </div>
</template>
<script>
import bus from "./../bus.js"
export default {
    created(){
        this.getUser();
        this.bus = bus;
    },
    data() {
        return {
            user:null,
        }
    },
    methods: {
        getUser(){
            this.$http({
					url:'http://www.520mg.com/member/ajax_login.php',
					method:'GET',
					withCredentials:true
				})
				.then(xhr=>{
					console.log(xhr.data);
					this.user = xhr.data;
				})
        },
        logout(){
            this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:"POST",
					withCredentials:true,//本地cookie 发送给服务器，让服务session知道我的登录状态
					data:`dopost=exit`,
				})
				.then(xhr=>{
					console.log(xhr.data);
					if(xhr.data.status){
						this.user={};
                        bus.setTocken("")
                        this.$router.push("/login")
					}
					
				})
        }
    },
}
</script>