import axios from 'axios'

const $axios = axios.create({
  baseURL: process.env.API
})

$axios.interceptors.request.use(function (config) {
  if (localStorage.getItem('TOKEN')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default ({ Vue }) => {
  Vue.prototype.$axios = $axios
}
