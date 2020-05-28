# nuxt-demo

## 功能
### 1. node代理/转发接口
#### 使用场景
- 接口没有做跨域处理，页面直接发送ajax请求会报跨域的错；
- 接口不能直接调用，需要先获取一个token，然后带着token去获取数据；

#### 设计思路
三种方案：
1. 在node服务器代码中，添加过滤，只要是当前页面发送过来的ajax请求，做统一转发；
2. serverMiddleware方案：没有node服务器（创建项目时没有选择server framework）或不想动 server/index.js 的代码时，可以使用服务器中间件serverMiddleware来处理；
3. [@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)方案，但只能做单纯的转发，解决跨域问题，不能实现带token请求的复杂逻辑   



## 接口

### 接口基本信息
在线mock平台：https://www.fastmock.site/

接口地址前缀：https://www.fastmock.site/mock/26c97e7a6aaac3d8e356c15412b5abc3/api/

### 获取新闻推荐接口
- news/recommend
- 参数：无
- 返回数据：
```json
{
  "code": 1,
  "data": [{
    "title": "Zoom停止中国个人用户注册，不再提供免费服务",
    "publishTime": "2020-05-19 10:03:10",
    "origin": "网易新闻"
  }]
}
``` 




