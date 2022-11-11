import { reqSendCode, reqUserLogout, reqUserRegister, reqUserLogin, reqUserInfo } from "@/api"
const state = {
  sendCode: "",
  userInfo: [],
  token: localStorage.getItem("token") || "",
}

const mutations = {
  SEND_CODE(state, sendCode) {
    state.sendCode = sendCode
  },
  USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  },
  USER_LOGIN(state, token) {
    state.token = token
  },
  USER_LOGOUT(state) {
    state.token = ""
    state.userInfo = ""
    localStorage.removeItem("token")
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
  async userLogin({ commit }, { phone, password }) {
    let result = await reqUserLogin(phone, password)
    if (result.code === 200) {
      commit("USER_LOGIN", result.data.token)
      localStorage.setItem("token", result.data.token)
    } else {
      return Promise.reject(new Error("Failed"))
    }
  },
  async userInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code === 200) {
      commit("USER_INFO", result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error("Failed"))
    }
  },
  async userLogout({ commit }) {
    let result = await reqUserLogout()
    if (result.code === 200) {
      commit("USER_LOGOUT")
      return 'ok'
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
