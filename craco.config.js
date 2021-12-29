const path = require('path');
const webpack = require('webpack');

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
    ],
  },
};
