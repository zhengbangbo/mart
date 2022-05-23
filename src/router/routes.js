// import router components
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'

export default [
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
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: "search",
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: { show: true },
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true },
  },
  {
    path: '/pay',
    component: Pay,
    meta: { show: true },
  }
]
