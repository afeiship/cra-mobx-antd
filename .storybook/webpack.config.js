const path = require('path');
const { configs, loaders, plugins } = require('@feizheng/webpack-app-kits');
const nxFlattern = require('@feizheng/next-flatten');
module.exports = async ({ config, mode }) => {
  // config.devtool = 'source-map';
  config.resolve.alias = configs.alias(config.resolve.alias);
  config.module.rules = nxFlattern([
    config.module.rules,
    loaders.environment(),
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    }
  ]);

  config.plugins = nxFlattern([
    config.plugins,
    plugins.provide({
      Blank: ['@feizheng/react-blank', 'default'],
      IfElse: ['@feizheng/react-if-else', 'default'],
      RCM: ['@feizheng/react-condition-manager', 'default'],
      RSM: ['@feizheng/react-status-manager', 'default'],
      cx: 'classnames'
    })
  ]);

  return config;
};
