/**
 * Created by dandan on 2020/5/27.
 * vision: 1.0
 * title: html 页面对应的axios对象
 * e-mail: supericesun@gmail.com
 */

const serverAxios = require('../../server/serverAxios');
const axios = require('axios');
const BASEURL = '/proxy/';  // 所有node代理的接口前都加一个 /proxy/

// 创建axios对象
let instance = null;

if (process.client) {  // 当前环境是浏览器，页面发送ajax请求
  instance = axios.create({
    baseURL: BASEURL,
    timeout: 300000,
    headers: {
      Accept: 'application/json',
    },
  });
} else {   // 放到asyncData中的请求，node自动转发，所以要用node处理
  instance = serverAxios;
}

// 添加请求拦截器
instance.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports = instance;
