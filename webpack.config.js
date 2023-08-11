// FIXME: This call to @babel/register is really ugly. Babel ought to transpile
// dependencies across module bounds; we should work out a fix when we can.
require('@babel/register')({
  cache: false,
  ignore: [/node_modules\/(?!@nymag)/, /vendor/],
  rootMode: 'upward',
})

const { development } = require('./config/webpack/development')

module.exports = development.toConfig()
