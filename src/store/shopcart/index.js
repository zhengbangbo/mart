import { reqCartList, reqDeleteCart } from '@/api'

const state = {
  cartList: []
}
const mutations = {
  CART_LIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  async cartList({ commit }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit("CART_LIST", result.data)
    }
  },
  async deleteCart({ commit }, skuId) {
    console.log(skuId)
    if(commit) {commit = 1}
    let result = await reqDeleteCart(skuId)
    if (result.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("Failed"))
    }
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}
