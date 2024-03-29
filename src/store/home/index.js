import {reqBannerList, reqCategoryList, reqFloorList} from '@/api'

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOOR_LIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async categoryList({commit}) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit("CATEGORY_LIST", result.data)
    }
  },
  async BannerList({commit}) {
    let result = await reqBannerList()
    if (result.code == 200) {
      commit("BANNER_LIST", result.data)
    }
  },
  async FloorList({commit}) {
    let result = await reqFloorList()
    if (result.code == 200) {
      commit("FLOOR_LIST", result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
