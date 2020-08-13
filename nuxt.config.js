// 定时任务
const task = require('./server/task');

// 获取最后一项，当做参数，.concat一个空数组是为了不改变 process.argv
const args = process.argv.concat([]).pop();
// 是否为发布到服务器的版本
const isRemote = args === '-xxx';

module.exports = {
  mode: 'universal',

  // 全局变量，客户端、服务端都能访问到
  env: {
    args: args,
    isRemote: isRemote,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'assets/style/_reset.scss',
    'assets/style/_common.scss',
  ],

  // 静态资源路径
  router: {
    base: isRemote ? '/html/nuxt-demo/' : '/'
  },

  // 静态页面发布 - generate 生成静态文件配置
  generate: {
    routes: function () {
      /**
       * generate 纯静态发布时，动态参数不会生成对应的页面，如果直接访问页面（或刷新页面）就报404了
       * 所以需要在这里配置强制将对应的动态页面生成出来；
       * 比如该项目中的新闻，/news/:id 中，直接访问 /news/1 就会404，因为这个页面默认是动态生成的，实际没有对应的静态页面；
       */
      let arr = [];
      for (let i = 0, len = 3; i < len; i++) {
        arr.push(`/news/${i + 1}`);
      }

      return arr;
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [],

  serverMiddleware: [
    {path: '/proxy', handler: '@/server/proxy.js'},
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // https://zh.nuxtjs.org/api/configuration-build/#styleresources
  // 引用全局scss变量
  styleResources: {
    scss: ['./assets/style/_var.scss',]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
