const spaBase = require('@jswork/craco-plugin-spa-base');
const dllRefs = require('@jswork/craco-plugin-dll-refs');
const spm = require('@jswork/craco-plugin-speed-measure');
const banner = require('@jswork/craco-plugin-banner');
const analyzer = require('@jswork/craco-plugin-bundle-analyzer');
const styled = require('@jswork/craco-plugin-styled-components');
const debug = require('@jswork/craco-plugin-debug');
const styledExt = require('@jswork/craco-plugin-styled-extension');

// 特别提醒: spm 使用的时候，会导致 %PUBLIC_URL%，无法编译。 DllRefs 组件失效等问题。

module.exports = {
  plugins: [
    { plugin: spaBase },
    // { plugin: spm },
    { plugin: banner },
    { plugin: analyzer },
    { plugin: dllRefs },
    { plugin: styled },
    { plugin: styledExt },
    // { plugin: debug },
  ],
};
