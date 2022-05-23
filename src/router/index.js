import Vue from 'vue'
import VueRouter from 'vue-router'
// use router
Vue.use(VueRouter)
// config router
import Routes from './routes'
import store from '@/store'

// 重写VueRouter的push方法,解决传递参数相同报错的问题,
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace;

// 重写push| replace   (location: 向哪里传递参数)
VueRouter.prototype.push = function (location, resolve, reject) {
  //第一个形参: 路由跳转的配置对象（query|params）
  //第二个参数: undefined|箭头函数（成功的回调）
  //第三个参数: undefined|箭头函数（失败的回调）
  // 如果传递了成功的回调函数与失败的回调函数
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产递第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
};
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
};

let router = new VueRouter({
  routes: Routes,
  scrollBehavior() {
    return { y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('userInfo')
          next()
        } catch (error) {
          // token 过期了，需要重新登录
          await store.dispatch('userLogout')
          next("/login")
        }
      }
    }
  } else {
    next()
  }
})





export default router
