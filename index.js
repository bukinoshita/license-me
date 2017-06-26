'use strict'

const fs = require('fs')
const writeLicense = require('./lib/write-license')

module.exports = (type = 'MIT', name, opts = {}) => {
  return new Promise((resolve, reject) => {
    if (typeof type !== 'string') {
      reject(new TypeError('Type must be a string.'))
    }

    fs.writeFile(
      `${process.cwd()}/license`,
      writeLicense(type.toLowerCase(), name, opts),
      err => {
        if (err) {
          reject(new TypeError(err))
        }

        resolve('License created!')
      }
    )
  })
}
