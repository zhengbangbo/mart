import Vue from 'vue'
import VueRouter from 'vue-router'
// use router
Vue.use(VueRouter)
// import router components
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
// config router
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

