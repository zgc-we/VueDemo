import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // 路线级码分拆
      // 这将为这个路由生成一个单独的块（大约.[hash].js）。
      // 当访问路由时，它是惰性加载的。
      component: () => import('./views/About.vue'),
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: () => import('./views/UserPage1.vue'),
        },
        {
          path: '/workInfo',
          name: 'workInfo',
          component: () => import('./views/workInfo.vue'),
        },
      ]
    }
  ]
})
