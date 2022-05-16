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
      component: Home,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: true }
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }

    },
    {
      path: '/search',
      component: Search,
      meta: { show: false },
      name: "search",
    },
    {
      path: '/',
      redirect: '/home',
      meta: { show: false }
    }
  ]
})

