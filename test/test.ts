// Packages
import test from 'ava'

// Root
import licenseMe from '../source'

// Utils
import getLicense from '../source/utils/get-license'

// Licenses
import { apache, GNUAGPLV3, mit, unlicense } from '../source/licenses'

// Types
import { LicenseType } from '../source/types'

test('licenses', async t => {
  const name: string = 'bukinoshita'
  const year: number = new Date('01/01/2019').getFullYear()

  t.is(typeof apache(name, { year }), 'string')
  t.is(typeof GNUAGPLV3(name, { year }), 'string')
  t.is(typeof mit(name, { year }), 'string')
  t.is(typeof unlicense(), 'string')
})

test('get license', async t => {
  const name: string = 'bukinoshita'
  const year: number = new Date('01/01/2019').getFullYear()
  const license = (type: LicenseType) => getLicense(name, type, { year })

  t.is(typeof license('apache license 2.0'), 'string')
  t.is(typeof license('gnu agplv3'), 'string')
  t.is(typeof license('the unlicense'), 'string')
  t.is(typeof license('MIT'), 'string')
})

test('license me', async t => {
  const name: string = 'bukinoshita'
  const type: LicenseType = 'MIT'
  const year: number = new Date('01/01/2019').getFullYear()

  t.truthy(licenseMe(name, type, { year }))
})
