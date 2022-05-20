import { reqDetailInfo, reqAddOrUpdateCart } from "@/api"
import { getUUID } from "@/utils/uuid_token"

const state = {
  detailInfo: {},
  uuid_token: getUUID()
}
const mutations = {
  DETAIL_INFO(state, detailInfo) {
    state.detailInfo = detailInfo
  }
}
const actions = {
  async getDetailInfo({ commit }, skuId) {
    let result = await reqDetailInfo(skuId)
    if (result.code === 200) {
      commit("DETAIL_INFO", result.data)
    }
  },
  async addOrUpdateCart({ commit }, { skuId, skuNum }) {
    console.log(commit)
    let result = await reqAddOrUpdateCart(skuId, skuNum)
    if (result.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("Failed"))
    }
  }
}
const getters = {
  valuesSkuJson(state) {
    return state.detailInfo.valuesSkuJson || ""
  },
  price(state) {
    return state.detailInfo.price || 0
  },
  categoryView(state) {
    return state.detailInfo.categoryView || {}
  },
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || []
  },
  skuInfo(state) {
    return state.detailInfo.skuInfo || {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
