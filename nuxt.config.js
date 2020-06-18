export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  generate: {
    routes() {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/projects').map((file) => {
        return {
          route: '/projects/' + file.slice(2, -5),
          payload: require('./assets/content/projects/' + file)
        }
      })
    }
  },

  /*
   ** Router
   */
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active-exact'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['typeface-inter', '@/assets/styles/styles.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/aos', ssr: false }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@aceforth/nuxt-optimized-images'
  ],

  optimizedImages: {
    optimizeImages: true,
    inlineImageLimit: -1
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', '@nuxtjs/style-resources'],
  markdownit: {
    injected: true
  },
  styleResources: {
    scss: ['~assets/styles/tools/*.scss', '~assets/styles/settings/*.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
