/**
 * Created by dandan on 2020/5/25.
 * vision:1.0
 * title:
 * e-mail:supericesun@gmail.com
 */
const serverAxios = require('../server/serverAxios');

// req 是 Node.js http request 对象
// res 是 Node.js http response 对象
export default async function (req, res, next) {
  let link = req.url;  // req.url 不带 /proxy/ 这个path前缀

  let res1 = await serverAxios.get(link);
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.end(JSON.stringify(res1.data));

  // next是一个调用下一个中间件的函数
  // 如果您的中间件不是最终执行，请不要忘记在最后调用next！
  // next();
}
