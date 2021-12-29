const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    plugins: [
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        View: ['@jswork/styled-box', 'default'],
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.DllReferencePlugin({
        manifest: require('./src/assets/libs/vendors-manifest.json'),
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './src/assets/libs/*.js'),
        // dll 引用路径
        publicPath: './static/libs',
        // dll最终输出的目录
        outputPath: './static/libs',
      }),
    ],
  },
};
