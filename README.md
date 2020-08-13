# nuxt-demo

## 功能

### 1.node代理/转发接口
#### 使用场景
- 接口没有做跨域处理，页面直接发送ajax请求会报跨域的错；
- 接口不能直接调用，需要先获取一个token，然后带着token去获取数据；

#### 设计思路
三种方案：
1. 在node服务器代码中，添加过滤，只要是当前页面发送过来的ajax请求，做统一转发；
2. serverMiddleware方案：没有node服务器（创建项目时没有选择server framework）或不想动 server/index.js 的代码时，可以使用服务器中间件serverMiddleware来处理；
3. [@nuxtjs/proxy](https://www.npmjs.com/package/@nuxtjs/proxy)方案，但只能做单纯的转发，解决跨域问题，不能实现带token请求的复杂逻辑   


### 2.请求接口需要带token
#### 使用场景
请求每个业务接口的时候，都需要带着token，以此来验证身份，token由一个提前分配好的key来生成；

#### 设计思路
用node发请求，token和时间戳作为一个**全局变量**(存到process上)来存储；


### 3.添加定时任务
#### 使用场景
实际项目中用到的是：node端自动、定时将sitemap中的url推给百度seo，post请求，参数为网站中所有的url；

#### 设计思路
一个是在 server/index.js 中引用定时任务，项目启动，定时任务也启动；

还一个是在 nuxt.config.js 中引用定时任务，项目启动，定时任务页启动；


### 4.generate 强制生成静态文件
#### 使用场景
generate 纯静态发布时，动态参数不会生成对应的页面，如果直接访问页面（或刷新页面）就报404了；

#### 解决方案
为了解决这个问题，就要在 generate 的时候将动态的部分生成静态页面；
在 nuxt.config.js -- generate.routes 中进行配置；


### 5.最终发布不在根目录下
#### 使用场景
generate 之后的静态页面，最终发布的时候不在根目录下；<br>
比如想发布到 http://ashita.top/html/nuxt-demo/ 下，默认 generate 出来的页面，静态资源默认路径都是 /_nuxt/，实际的资源路径应该是 /html/nuxt-demo/_nuxt/。

### 解决方案
nuxt.config.js 中的 router.base 可以自定义配置静态资源路径，但是改了之后 dev 就访问不到页面了；
所以要做一个区分，generate 命令用自定义的路径，其他命令保持默认的 /；具体操作如下：
1. 在 package.json 中改造 generate 命令： <br>
    ```
    "generate": "cross-env NODE_ENV=xxx nuxt generate"
    ```
    xxx 就是一个标识字符串，用来做判断；
2. nuxt.config.js 中，router 改为下面的代码：
    ```
    router: {
      base: process.env.NODE_ENV === 'xxx' ? '/html/nuxt-demo/' : '/'
    },
    ```

详细说明和解释可参照[NuxtJS 问题汇总](http://ashita.top/front/nuxtjs.html)中的第3条；


### 0.注意
实际的项目不知道哪里配置有问题，build、start 运行之后会出现一些奇怪的问题，找了好久也没找到原因，包括：

- "1.node代理/转发接口"，将监听路由的代码放到server/index.js中的方案，build之后start运行，代码不执行；最终采用了方案2：serverMiddleware方案
- "3.添加定时任务"，第一个方案，在 server/index.js 中引用定时任务，build之后start运行，代码不执行，最终采用了方案2：将定时任务放到nuxt.config.js中引用；

一个方案能不能用，是以build之后start运行正常来判定的；

## 接口

### 接口基本信息
在线mock平台：https://www.fastmock.site/

接口地址前缀：https://www.fastmock.site/mock/26c97e7a6aaac3d8e356c15412b5abc3/api/

### 获取新闻推荐接口
- news/recommend
- 参数：无
- 请求方式：get
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
### 获取token接口
- getToken
- 参数：key
- 请求方式：post
- 返回数据：
```json
{
  "code": 1,
  "data": "xxxxxxxxxx"
}
``` 




