import {
  babel,
  babelWithReact,
  css,
  fonts,
} from '@nymag/configs/webpack/loaders/index.js'
import {
  client,
  development as developmentEnvironment,
} from '@nymag/configs/webpack/environments/index.js'
import {
  context,
  entrypoints,
  resolveExtensions,
  resolveModules,
} from '@nymag/configs/webpack/base/index.js'
import {
  define,
  html,
  reactRefresh,
} from '@nymag/configs/webpack/plugins/index.js'
import R from 'ramda'

export const development = R.pipe(
  developmentEnvironment(),
  context(),
  resolveExtensions(),
  resolveModules(),
  entrypoints({ client: ['./client'] }),
  define(),
  babel(babelWithReact()),
  css(),
  fonts(),
  // reactRefresh(),
  html(),
)(client({ name: 'paywall-reader-interface' }))
