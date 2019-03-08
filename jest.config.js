const {jest: jestConfig} = require('easy-scripts/config')

module.exports = Object.assign(jestConfig, {
  coverageThreshold: null,
})
