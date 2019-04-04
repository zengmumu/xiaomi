import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home.vue'
import category from './views/category/category.vue'
import cart from './views/cart/cart.vue'
import user from './views/user/user.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
