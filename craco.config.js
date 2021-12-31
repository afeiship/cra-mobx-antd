const spaBase = require('@jswork/craco-plugin-spa-base');
const dllRefs = require('@jswork/craco-plugin-dll-refs');
const spm = require('@jswork/craco-plugin-speed-measure');
const banner = require('@jswork/craco-plugin-banner');
const analyzer = require('@jswork/craco-plugin-bundle-analyzer');

module.exports = {
  plugins: [
    { plugin: spaBase },
    { plugin: spm },
    { plugin: banner },
    { plugin: analyzer },
    { plugin: dllRefs },
  ],
};
