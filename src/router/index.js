import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
