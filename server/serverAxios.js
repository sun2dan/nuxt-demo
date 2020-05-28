/**
 * Created by dandan on 2020/5/27.
 * vision: 1.0
 * title: node发送请求的axios对象
 * e-mail: supericesun@gmail.com
 */

const axios = require('axios');
const BASEURL = 'https://www.fastmock.site/mock/26c97e7a6aaac3d8e356c15412b5abc3/api/';

// 创建axios对象
let instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

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
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);


module.exports = instance;
