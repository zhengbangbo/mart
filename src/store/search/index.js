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
  },
  pageInfo(state) {
    let info = {}
    info["total"] = state.searchInfo.total || 0
    info["pageSize"] = state.searchInfo.pageSize || 0
    info["pageNo"] = state.searchInfo.pageNo || 0
    info["totalPages"] = state.searchInfo.totalPages || 0
    return info
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
