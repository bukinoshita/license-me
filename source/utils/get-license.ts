// Licenses
import { apache, mit, unlicense, GNUAGPLV3 } from '../licenses'

// Types
import { LicenseType, OptionsType } from '../types'

function getLicense(name: string, type: LicenseType, options: OptionsType): string {
  switch (type) {
    case 'apache license 2.0':
      return apache(name, options)

    case 'gnu agplv3':
      return GNUAGPLV3(name, options)

    case 'the unlicense':
      return unlicense()

    default:
      return mit(name, options)
  }
}

export default getLicense
