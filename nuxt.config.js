const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')
const env = require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios',
    '@/plugins/picture-input'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],

  //https://github.com/nuxt-community/auth-module
  auth: {
    endpoints: {
      login: { url: '/auth/login', method: 'post', propertyName: 'token' },
      logout: { url: '/auth/logout', method: 'post', propertyName: false },
      user: { url: '/auth/user', method: 'get', propertyName: 'user' }
    },
    redirect: {
      login: '/login',
      home: '/'
    }
  },

  router: {
    middleware: ["auth"]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    //proxy: true,
    baseURL: 'localhost:3333'
  },
    /*
  ** Build configuration
  */
  build: {
    vendor:['aws-sdk'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/,/^vue-picture-input/]
          })
        ]
      }
    }
  }
}
