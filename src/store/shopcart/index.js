import { reqCartList, reqDeleteCart, reqToggleCheckedById} from '@/api'

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
    if(commit) {commit = 1}
    let result = await reqDeleteCart(skuId)
    if (result.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("Failed"))
    }
  },
  async toggleCheckedById({ commit }, { skuId, isChecked }) {
    if(commit) {commit = 1}
    let result = await reqToggleCheckedById(skuId, isChecked)
    if (result.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("Failed"))
    }
  },
  deleteChecked({dispatch, getters}) {
    // 遍历购物车中所有的商品，如果商品的选中状态为true，则删除
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked ? dispatch("deleteCart", item.skuId) : ""
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
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
