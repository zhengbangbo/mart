import Vue from 'vue'
import App from './App.vue'

// 自定义组件
import TheCarousel from '@/components/Carousel'
import TypeNav from '@/components/TypeNav'
import ThePagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(TheCarousel.name, TheCarousel)
Vue.component(ThePagination.name, ThePagination)

// 第三方组件
import { MessageBox } from 'element-ui';
// 原型链上全局方法对象
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import router from '@/router'

import store from '@/store'

// 引入，即执行一次
import '@/mock/mockServe'

import * as API from '@/api'

// 懒加载插件
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/loading.gif'
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false

Vue.filter("imgDefault", function(value) {
  console.dir(value);
  return value
})
new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
})
