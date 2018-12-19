import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // 路线级码分拆
      // 这将为这个路由生成一个单独的块（大约.[hash].js）。
      // 当访问路由时，它是惰性加载的。
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
