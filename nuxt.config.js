export default {
    generate: {
        fallback: true
    },

    target: 'static', // default is 'server'
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ACVDT - Agence du cadre de vie',
        titleTemplate: 'ACVDT | %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        ],
        
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/animation.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        { 
            src: '~/plugins/bootstrap.js', 
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal', 
            mode: 'client'
        },
        { 
            src: '~/plugins/notifications-client.js', 
            mode: 'client' 
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: 'https://ip3dev.com/drupal-api',
    },

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
    },

    env: {
        baseUrl: 'https://ip3dev.com/drupal-api',
        siteUrl:'https://ip3dev.com'
    }
}
