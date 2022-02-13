const spaBase = require('@jswork/craco-plugin-spa-base');
const dllRefs = require('@jswork/craco-plugin-dll-refs');
const spm = require('@jswork/craco-plugin-speed-measure');
const banner = require('@jswork/craco-plugin-banner');
const analyzer = require('@jswork/craco-plugin-bundle-analyzer');
const styled = require('@jswork/craco-plugin-styled-components');
// const debug = require('@jswork/craco-plugin-debug');

module.exports = {
  plugins: [
    { plugin: spaBase },
    { plugin: spm },
    { plugin: banner },
    { plugin: analyzer },
    { plugin: dllRefs },
    { plugin: styled },
  ],
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
