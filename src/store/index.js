import Vue from "vue"
import Vuex from "vuex"
// 需要使用插件一次
Vue.use(Vuex)

import home from "./home"
import search from "./search"

export default new Vuex.Store({
  // 实现vuex仓库模块化开发存储数据
  modules: {
    home,
    search
  }
})

