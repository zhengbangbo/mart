export default [
  {
    path: '/home',
    component: () => import('@/views/Home'),
    meta: { show: true }
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: { show: true }
  },
  {
    path: '/register',
    component: () => import('@/views/Register'),
    meta: { show: false }

  },
  {
    path: '/search/:keyword?',
    component: () => import('@/views/Search'),
    meta: { show: true },
    name: "search",
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/Detail'),
    meta: { show: true },
  },
  {
    path: '/addcartsuccess',
    component: () => import('@/views/AddCartSuccess'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path.indexOf('detail') != -1) {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/shopcart',
    component: () => import('@/views/ShopCart'),
    meta: { show: true },
  },
  {
    path: '/trade',
    component: () => import('@/views/Trade'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: () => import('@/views/Pay'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/views/PaySuccess'),
    beforeEnter: (to, from, next) => {
      if (from.path == '/pay') {
        next()
      } else {
        next(false)
      }

    },
    meta: { show: true },
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    children: [
      {
        path: 'myorder',
        component: () => import('@/views/Center/MyOrder'),
      },
      {
        path: 'grouporder',
        component: () => import('@/views/Center/GroupOrder'),
      }
    ],
    redirect: '/center/myorder',
    meta: { show: true },
  }
]
