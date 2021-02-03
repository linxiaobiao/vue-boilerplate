import axios from 'axios'
import requestConfig from '../config/request'

const { baseURL, timeout } = requestConfig

// 创建axios实例
const instance = axios.create({
  baseURL,
  timeout, // 超时
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  // transformRequest: [
  //   function (data) {
  //     return qs.stringify(data)
  //   }
  // ]
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const commonParams = {
      commonParams: 'params1'
    }

    config.params = {
      ...config.params,
      ...commonParams
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
