const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const loader = require('./loaders/index');
const customConfig = require('./custom_config/index')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', loader)
environment.config.merge(customConfig)

// environment.plugins.prepend(
//     'Define',
//     new DefinePlugin({
//         __VUE_OPTIONS_API__: false,
//         // or __VUE_OPTIONS_API__: true,
//         __VUE_PROD_DEVTOOLS__: false
//     })
// )

module.exports = environment
