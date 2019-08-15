// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  'cli.promptSettings': false,
  'webpack.extend': {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '~': path.resolve(__dirname, '/src')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "file-loader",
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
    ]
  }
};
