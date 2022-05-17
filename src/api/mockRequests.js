import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

const mockRequests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
})

mockRequests.interceptors.request.use((config) => {
  nprogress.start()
  return config
}, (error) => {
  return Promise.reject(error)
})

mockRequests.interceptors.response.use((response) => {
  nprogress.done()
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default mockRequests
