const path = require('path');

module.exports = async ({ config, mode }) => {
  config.devtool = 'source-map';
  config.resolve.alias['@'] = path.resolve(__dirname, '../src');

  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/;

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
