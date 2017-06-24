'use strict'

const mit = require('./../helpers/mit')
const apacheLicense2 = require('./../helpers/apache-license-2')

module.exports = (type, name, opts) => {
  switch (type) {
    case 'Apache License 2.0':
      return apacheLicense2(name, opts)

    default:
      return mit(name, opts)
  }
}
