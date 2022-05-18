import { reqSearchInfo } from "@/api"

const state = {
  searchInfo: {}
}
const mutations = {
  SEARCH_INFO(state, searchInfo) {
    state.searchInfo = searchInfo
  }
}
const actions = {
  async getSearchInfo({ commit }, data = {}) {
    let result = await reqSearchInfo(data)
    if (result.code === 200) {
      commit("SEARCH_INFO", result.data)
    }
  }
}
const getters = {
  attrsList(state) {
    return state.searchInfo.attrsList || [] // 没有网络的情况
  },
  goodsList(state) {
    return state.searchInfo.goodsList || []
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || []
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
