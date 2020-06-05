# babel-preset-sevencooks [![](https://img.shields.io/npm/v/babel-preset-sevencooks.svg)](https://www.npmjs.com/package/babel-preset-sevencooks) [![](https://img.shields.io/npm/dm/babel-preset-sevencooks.svg)](https://www.npmjs.com/package/babel-preset-sevencooks) [![Dependency Status](https://david-dm.org/sevencooks-gmbh-co-kg/babel-preset-sevencooks.svg)](https://david-dm.org/sevencooks-gmbh-co-kg/babel-preset-sevencooks?branch=master)

This package includes the Babel preset used by SevenCooks GmbH & Co. KG.<br>
Please refer to its documentation:

## Usage

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-react-app.

```sh
npm install babel-preset-react-app --save-dev
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```json
{
  "presets": ["react-app"]
}
```

This preset uses the `useBuiltIns` option with [transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/) and [transform-react-jsx](http://babeljs.io/docs/plugins/transform-react-jsx/), which assumes that `Object.assign` is available or polyfilled.
