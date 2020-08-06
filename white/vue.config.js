// vue config
// module.exports = {
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: [
//             'vue-style-loader',
//             'css-loader',
//             'sass-loader'
//           ]
//         }
//       ]
//     },
//   }
// }

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'ru',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
}
