import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import store from '@/store'

const REFLARE_PROXY = 'https://cors-anywhere.dev.imzbb.cc/'
const API_HOST = 'http://gmall-h5-api.atguigu.cn'

const requests = axios.create({
  baseURL: `${REFLARE_PROXY+API_HOST}/api`,
  timeout: 5000,
})

requests.interceptors.request.use((config) => {
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token')
  }
  nprogress.start()
  return config
}, (error) => {
  return Promise.reject(error)
})

requests.interceptors.response.use((response) => {
  nprogress.done()
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default requests
