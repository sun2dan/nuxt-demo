/**
 * Created by dandan on 2020/5/25.
 * vision:1.0
 * title:
 * e-mail:supericesun@gmail.com
 */
const axios = require('../assets/utils/axiosConfig');
let interfaceUrl = 'http://dcmsweb.jd.com';

export default async function (req, res, next) {
  // req 是 Node.js http request 对象

  let link = req.url; //.replace(/\/proxy/gmi, '');
  let queryStr = 'siteId=100901';
  if (link.indexOf('?') > -1) queryStr = '&' + queryStr;
  else queryStr = '?' + queryStr;
  link += queryStr;

  let res1 = await axios.get(interfaceUrl + link);
  //console.log('___res___',link, res1);
  res.setHeader('Content-Type','application/json;charset=utf-8');
  res.end(JSON.stringify(res1.data));

  // res 是 Node.js http response 对象

  // next是一个调用下一个中间件的函数
  // 如果您的中间件不是最终执行，请不要忘记在最后调用next！
  // next();
}
