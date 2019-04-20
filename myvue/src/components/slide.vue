<template>
    <div v-if="list" class="swiper" v-on:mouseover="stop()" @mouseout="auto()">
       
        <transition-group name="image"  tag="ul">
            <li class="sl" v-for="(item,index) in list" :key="item.url" alt="" v-show="index==currentInd">
                 <img :src="item.url" >   
            </li>
                         
        </transition-group>
        <ul>
            <li v-for="(item,index) in list" @click="currentInd=index" :key="item.url">{{index+1}}</li>
        </ul>
        
       
    </div>
</template>
<script>
export default {
    props:["list"],
    data() {
        return {
            currentInd:0,
            lastInd:0,
            interId:null,
        }
    },
    created() {
        this.auto();
    },
    methods: {
        auto(){            
            this.interId = setInterval(()=>{
                 this.lastInd = this.currentInd;
                if(this.currentInd<this.list.length-1){
                   
                    this.currentInd++;

                }else{
                    this.currentInd=0
                }
            },3000)
           
        },
        stop(){
            clearInterval(this.interId);
            console.log("stop");
        }
    },
}
</script>
<style>
/* @keyframes slideIn {
    from{ transform: translate(100%,0)}
    to{transform: translate(0%,0)} 
}
@keyframes slideOut {
    from{ transform: translate(0%,0)}
    to{transform: translate(-100%,0)} 
}
.slide-enter-active{ animation: slideIn 1s ease;}
.slide-leave-active{ animation: slideout 1s ease;} */
.image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-enter-to {
    transform: translateX(0);
  }
  .image-leave-to {
    transform: translateX(-100%);
  }

    .swiper{ position: relative; width: 100%; height: 400px; overflow: hidden;}
    .swiper img{ width: 100%;}
    .swiper .sl{ position: absolute; left:0; top:0}
</style>