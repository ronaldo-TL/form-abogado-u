const { configure } = require('quasar/wrappers');
const path = require('path')

module.exports = configure(function (/* ctx */) {
  return {

    boot: [
      'i18n',
      'message',
      'axios',
    ],

    css: [
      'app.scss'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v7',
      'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', 
      'material-icons', 
    ],

    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node20'
      },

      vueRouterMode: 'history',

      // extendViteConf(viteConf,{isClient,isServer}){
      //   viteConf.base='/herramientas'
      // },


      vitePlugins: [
        ['@intlify/vite-plugin-vue-i18n', {
          // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
          // compositionOnly: false,

          // you need to set i18n resource including paths !
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ]
    },
    devServer: {
      // https: true
      open: true 
    },

    framework: {
      lang: 'es',
      config: { 
        notify: {
          badgeColor: 'primary',
          group: false
        },
      },
      
      components: [
        'QInput',
        'QDialog'
      ],
      // directives: ['CloseOvserlay'],
      plugins: [
        'Notify',
        'AppFullscreen'
      ]

    },
    animations: [],


    ssr: {
      pwa: false,
      prodPort: 3000, 
      middlewares: [
        'render'
      ]
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,

    },

    cordova: {
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {

  
      },

      builder: {
        appId: 'form-abogado-u'
      }
    },

    bex: {
      contentScripts: [
        'my-content-script'
      ],

      
    }
  }
});
