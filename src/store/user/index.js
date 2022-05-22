import { reqSendCode, reqUserRegister } from "@/api"
const state = {
  sendCode: ""
}

const mutations = {
  SEND_CODE(state, sendCode) {
    state.sendCode = sendCode
  }
}

const actions = {
  async sendCode({ commit }, phone) {
    let result = await reqSendCode(phone)
    if (result.code === 200) {
      commit("SEND_CODE", result.data)
    }
  },
  async userRegister({ commit }, { phone, code, password, password1 }) {
    if (commit) { commit = 1 }
    let result = await reqUserRegister(phone, code, password, password1)
    if (result.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("Failed"))
    }
  },
}
const getters = {
}


export default {
  state,
  mutations,
  actions,
  getters
}
