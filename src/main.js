import Vue from 'vue'
import App from './App.vue'

import TheCarousel from '@/components/Carousel'
import TypeNav from '@/components/TypeNav'
import ThePagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(TheCarousel.name, TheCarousel)
Vue.component(ThePagination.name, ThePagination)
import { MessageBox } from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import router from '@/router'

import store from '@/store'

// 引入，即执行一次
import '@/mock/mockServe'

import * as API from '@/api'

import VueLazyload from 'vue-lazyload'
import loading from '@/assets/loading.gif'
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // signup router
  // $route: get route info(path/query/params)
  // $router: navigate to other pages(push/replace)
  router,
  store
}).$mount('#app')
