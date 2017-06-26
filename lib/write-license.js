'use strict'

const mit = require('./../helpers/mit')
const apacheLicense2 = require('./../helpers/apache-license-2')
const gnuAgplv3 = require('./../helpers/gnu-agplv3')

module.exports = (type, name, opts) => {
  switch (type) {
    case 'apache license 2.0':
      return apacheLicense2(name, opts)

    case 'gnu agplv3':
      return gnuAgplv3(name, opts)

    default:
      return mit(name, opts)
  }
}
