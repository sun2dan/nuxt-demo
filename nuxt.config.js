const task = require('./server/task');

module.exports = {
  mode: 'universal',
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
