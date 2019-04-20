import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import about from './views/about.vue'
import produce from './views/produce.vue'
import detail from './views/detail.vue'
import arg from './views/arg.vue'
import comment from './views/comment.vue'
import login from './views/logoin.vue'
import user from './views/user.vue'
import bus from './bus.js';
import cart from './views/cart.vue'
Vue.use(Router)

 const router = new Router({
  routes: [
    {path:'/home',component:home,alias:"/"},
    {path:'/cart',component:cart},
    {path:'/about',component:about},
    {path:'/login',component:login},
    {path:'/user',component:user,meta:{requireAuth:true}},
    {path:'/produce/:id',component:produce},
    {path:'/detail',component:detail,
    children:[
      { path:"arg",component:arg },
      { path:"comment",component:comment },
      { path:"",redirect:'comment' }
    
    ]
    },
    {
      path:'/detail',  // path路径 
      redirect:'/detail/comment'  // 重定向指向的路径
    }
  ]
})
export default  router;
router.beforeEach((to, from, next) => {
  console.log(to,from,"tofrom")
  if(to.meta.requireAuth){
    if(!bus.getTocken()){
      next("/login?redirect="+to.path);
    }else{
      next();
    }
  }else{
    next();
  }
 
})
