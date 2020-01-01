module.exports = {
    mode: 'universal',
    server: {
        port: 8080, // default: 3000
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
    loading: {color: '#1e297b'},
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/tailwind.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~plugins/ga.js', mode: 'client'}
    ],
    /*
    ** Nuxt.js dev-modules
    */
    devModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/sitemap',
    ],

    /*
    ** Build configuration
    */
    build: {
        postcss: {
            plugins: {
                tailwindcss: './tailwind.config.js',
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}

