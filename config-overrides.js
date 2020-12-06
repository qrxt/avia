const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');
const { alias } = require('react-app-rewire-alias')

console.log('dirname is', __dirname);

module.exports = override(
  alias({
    '@root': '.',

    '@src': './src',
    '@public': './public',

    '@components': './src/components',
  }),
);
