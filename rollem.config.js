const fs = require('fs')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')
const cjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const pkg = JSON.parse(fs.readFileSync('./package.json'))
const uglifyConfig = JSON.parse(fs.readFileSync('./uglify.json'))
const external = Object.keys(pkg['devDependencies'])

module.exports = [
  {
    entry: 'src/index.js',
    external,
    plugins: [
      resolve({ jsnext: true, browser: true }),
      cjs(),
      buble({ jsx: 'h' })
    ],
    sourceMap: true,
    format: 'umd',
    dest: pkg['main'],
    moduleName: pkg['amdName'],
    globals: {
      preact: 'preact'
    }
  },
  {
    entry: 'src/index.js',
    external,
    plugins: [
      resolve({ jsnext: true, browser: true }),
      cjs(),
      buble({ jsx: 'h' }),
      uglify(uglifyConfig)
    ],
    sourceMap: true,
    format: 'umd',
    dest: pkg['minified:main'],
    moduleName: pkg['amdName'],
    globals: {
      preact: 'preact'
    }
  }
]
