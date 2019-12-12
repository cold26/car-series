import axios from 'axios'
import store from '@/store'
const instance = axios.create({
  baseURL: 'https://baojia.chelun.com/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

//添加请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.commit('changeShow', true)
  return config;
}, function (error) {
  store.commit('changeShow', false)
  // Do something with request error
  return Promise.reject(error);
});

//添加响应拦截器
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  store.commit('changeShow', false)
  return response;
}, function (error) {
  // Do something with response error
  store.commit('changeShow', false)
  return Promise.reject(error);
});

export default instance;