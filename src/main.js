import Vue from 'vue'
import App from './App.vue'

// 三级联动组件---全局组件
import TypeNav from '@/views/Home/TypeNav'
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

// import router
import router from '@/router'
// test
import { reqCategoryList } from '@/api'
reqCategoryList()

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // signup router
  // $route: get route info(path/query/params)
  // $router: navigate to other pages(push/replace)
  router
}).$mount('#app')
