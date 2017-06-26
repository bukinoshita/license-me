'use strict'

const mit = require('./../helpers/mit')
const apacheLicense2 = require('./../helpers/apache-license-2')
const gnuAgplv3 = require('./../helpers/gnu-agplv3')
const gnuGplv3 = require('./../helpers/gnu-gplv3')
const gnuLgplv3 = require('./../helpers/gnu-lgplv3')
const mozillaPublicLicense2 = require('./../helpers/mozilla-public-license-2')
const theUnlicense = require('./../helpers/the-unlicense')

module.exports = (type, name, opts) => {
  switch (type) {
    case 'apache license 2.0':
      return apacheLicense2(name, opts)

    case 'gnu agplv3':
      return gnuAgplv3(name, opts)

    case 'gnu gplv3':
      return gnuGplv3(name, opts)

    case 'gnu lgplv3':
      return gnuLgplv3()

    case 'mozilla public license 2.0':
      return mozillaPublicLicense2()

    case 'the unlicense':
      return theUnlicense()

    default:
      return mit(name, opts)
  }
}
