/**
 * Created by dandan on 2020/5/27.
 * vision: 1.0
 * title: node发送请求的axios对象
 * e-mail: supericesun@gmail.com
 */

const axios = require('axios');
const BASEURL = 'https://www.fastmock.site/mock/26c97e7a6aaac3d8e356c15412b5abc3/api/';

// 全局token信息
process.GLOBAL_TOKEN = process.GLOBAL_TOKEN || {
  token: '',
  time: 0  // 时间戳
};
const TOKEN_EXPIRED_TIME = 1000 * 60 * 60 * 24; // 24小时过期时间

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
    const USER_TOKEN = await getToken();
    if (USER_TOKEN) config.headers.common['token'] = USER_TOKEN;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 如果接口返回token已失效，可以在这里处理，也可以直接返回，让页面来处理
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 获取token
async function getToken() {
  let ts = new Date().getTime();
  let tokenInfo = process.GLOBAL_TOKEN;
  let TOKEN_URL = BASEURL + 'getToken';

  // 有值并且未过期
  if (tokenInfo.token && ts - tokenInfo.time < TOKEN_EXPIRED_TIME) return tokenInfo.token;

  // 重新获取
  return new Promise((resolve, reject) => {
    axios.post(TOKEN_URL, {key: 'this is a key for token'}).then(res => {
      if (res.status !== 200) reject(res);

      let token = res.data.data;
      process.GLOBAL_TOKEN.token = token;
      process.GLOBAL_TOKEN.time = new Date().getTime();
      resolve(token);

    }).catch(err => {
      reject(err)
    });
  });
}


module.exports = instance;
