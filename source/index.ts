// Packages
import * as fs from 'fs-extra'

// Utils
import getLicense from './utils/get-license'

// Types
import { LicenseType, OptionsType } from './types'

async function licenseMe(name: string, type: LicenseType, options: OptionsType) {
  try {
    const file = `${process.cwd()}/license`
    const license = getLicense(name, type, options)

    await fs.writeFile(file, license)
  } catch (error) {
    Promise.reject(error)
  }
}

export default licenseMe
