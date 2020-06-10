/**
 * Created by dandan on 2020/6/10.
 * vision: 1.0
 * title: seo定时推送任务，每天凌晨调用api接口，提交sitemap中的urls
 * e-mail: supericesun@gmail.com
 */
const axios = require('axios');
const fs = require('fs');

const path = 'http://data.zz.baidu.com/urls?site=https://ashita.top&token=123456';

// 发送数据
async function sendSiteMap() {
  let headers = {'content-type': 'text/plain'};
  let urls = getUrlsFromSiteMap();
  fs.writeFileSync(require('path').join(__dirname, 'logs.txt'), urls.join('\n'));

  let res = await axios.post(path, urls.join('\n'), {headers: headers});
  let status = res.status;
  let data = res.data;
  let {remain, success, not_same_site, not_valid} = data;
  console.log('百度API推送状态：', status, '\t推送结果：', urls.length, success, remain);
}

// 从sitemap获取urls
function getUrlsFromSiteMap() {
  let str = fs.readFileSync('./static/sitemap.xml', 'utf-8');
  let reg = /<loc>([\w\d\/\:.]+)<\/loc>/gmi;
  let res = [], match;

  while (match = reg.exec(str)) {
    if (match && match[1]) res.push(match[1]);
  }
  return res;
}

let timer = null;
let time = 2 * 1000 * 60 * 60; // 2小时检查一次

const task = () => {
  clearInterval(timer);
  sendSiteMap();

  timer = setInterval(() => {
    let now = new Date();
    let hour = now.getHours();
    // 每天凌晨3点之前推送一次 - 2小时检查一次，3点之前一定会执行
    if (hour < 3) sendSiteMap();
  }, time);
};

try {
  // 只在生产环境调用
  // if (process.env.NODE_ENV === 'production') task();
  task();
} catch (ex) {
  console.log('百度API推送失败', ex);
}

module.exports = task;
