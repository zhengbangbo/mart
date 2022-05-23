import { reqUserAddressList, reqOrderList } from '@/api'

const state = {
  addressList: [],
  orderList: []
}

const getters = {
}

const mutations = {
  USER_ADDRESS_LIST(state, addressList) {
    state.addressList = addressList
  },
  ORDER_LIST(state, orderList) {
    state.orderList = orderList
  }
}

const actions = {
  async userAddressList({ commit }) {
    let result = await reqUserAddressList()
    if (result.code === 200) {
      commit("USER_ADDRESS_LIST", result.data)
      return 'ok'
    }
  },
  async orderList({ commit }) {
    let result = await reqOrderList()
    if (result.code === 200) {
      commit("ORDER_LIST", result.data)
      return 'ok'
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
