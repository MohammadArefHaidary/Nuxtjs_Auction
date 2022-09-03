import path from 'path'
import fs from 'fs'
export default {
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Auction website",
    htmlAttrs: {
      lang: "en",

    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: "Auction website"},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "./css/bootstrap.rtl.min.css",
      },
    ],
    script: [
      {
        src: "./js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
      {
        src: "./js/js.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/scss/app.scss',
    '~/assets/fonts/fnt.css',
    '~/assets/css/app.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'https://lora122.ir'
      },
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://lora122.ir",
    credentials: true,
    proxy:true

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

};
