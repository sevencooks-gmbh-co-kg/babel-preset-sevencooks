/**
 * Copyright (c) 2020-present, SevenCooks GmbH & Co. KG.
 *
 * This source code is licensed under the Unlicense found in the
 * LICENSE file in the root directory of this source tree.
 */
'use-strict'

const config = require('./config')

module.exports = () => {
  // This is similar to how `env` works in Babel:
  // https://babeljs.io/docs/usage/babelrc/#env-option
  // We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
  // https://github.com/babel/babel/issues/4539
  // https://github.com/facebook/create-react-app/issues/720
  // It’s also nice that we can enforce `NODE_ENV` being specified.
  const env = process.env.BABEL_ENV || process.env.NODE_ENV
  return config(env)
}
