import { reqCartList } from '@/api'

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
