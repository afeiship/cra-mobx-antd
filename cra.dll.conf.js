const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dllPath = 'src/assets/libs';

/**
 * https://webpack.docschina.org/plugins/dll-plugin/
 * https://brunolm.wordpress.com/2017/03/24/webpack-dllplugin-and-dllreferenceplugin/
 * https://github.com/webpack/webpack/issues/8078
 * https://blog.csdn.net/weixin_44420276/article/details/103132832
 * https://blog.csdn.net/weixin_39773218/article/details/97494099
 * https://www.jianshu.com/p/a5b3c2284bb6
 */

module.exports = {
  mode: 'production',
  entry: {
    vendors: [
      'react',
      'react-dom',
      'mobx',
      'mobx-react',
      'antd',
      'antd-form-builder',
      'styled-components',
      'lodash',

      '@jswork/next',
      '@jswork/rctpl-ant-radio',
      '@jswork/rctpl-ant-select-default',
      '@jswork/react-ant-checkbox',
      '@jswork/react-ant-checkbox-group',
      '@jswork/react-ant-editable-tag-group',
      '@jswork/react-ant-input-search',
      '@jswork/react-ant-radio-group',
      '@jswork/react-ant-select',
      '@jswork/react-ant-switch',
      '@jswork/react-ant-tree',
      '@jswork/react-ant-tree-select',
      '@jswork/react-condition-manager',
      '@jswork/react-empty-state',
      '@jswork/react-if-else',
      '@jswork/react-list',
      '@jswork/react-status-manager',
      '@jswork/styled-box',
      '@jswork/styled-plugin-absolute-center',
      '@jswork/styled-plugin-absolute-rect',
      '@jswork/styled-plugin-flexbox',
      '@jswork/styled-plugin-line',
      '@jswork/styled-plugin-transform-center',
      '@jswork/use-active-state',
    ],
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].[hash:6].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]',
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd(),
    }),
  ],
};
