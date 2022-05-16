import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

requests.interceptors.request.use((config) => {
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
