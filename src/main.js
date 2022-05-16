import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// import router
import router from '@/router'

// import store
import store from '@/store'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // signup router
  // $route: get route info(path/query/params)
  // $router: navigate to other pages(push/replace)
  router,
  store
}).$mount('#app')
