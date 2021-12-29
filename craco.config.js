const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        View: ['@jswork/styled-box', 'default'],
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.DllReferencePlugin({
        manifest: require('./.tmp/libs/vendors-manifest.json'),
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, '.tmp/libs/*.js'),
        // dll 引用路径
        publicPath: './static/libs',
        // dll最终输出的目录
        outputPath: './static/libs',
      }),
    ],
  },
};
