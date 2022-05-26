// 引入一级路由组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
// 引入二级路由组件
import MyOrder from '@/views/Center/MyOrder'
import GroupOrder from '@/views/Center/GroupOrder'

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
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true }
  },
  {
    path: '/center',
    component: Center,
    children: [
      {
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'grouporder',
        component: GroupOrder,
      }
    ],
    redirect: '/center/myorder',
    meta: { show: true },
  }
]
