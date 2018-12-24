import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
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
        {
          path: '/exercise',
          name: 'exercise',
          component: () => import('./views/Exercise.vue'),
        },
        {
          path: '/dataProps',
          name: 'dataProps',
          component: () => import('./views/DataProps.vue'),
        },
      ]
    }
  ]
})
