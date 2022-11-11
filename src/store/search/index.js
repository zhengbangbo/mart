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
    console.log("goodsList: ", state)
    // const result = state.searchInfo.goodsList
    return state.searchInfo.goodsList || []
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || []
  },
  pageNo(state) {
    return state.searchInfo.pageNo || 0
  },
  pageSize(state) {
    return state.searchInfo.pageSize || 0
  },
  total(state) {
    return state.searchInfo.total || 0
  },
  totalPages(state) {
    return state.searchInfo.totalPages || 0
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
