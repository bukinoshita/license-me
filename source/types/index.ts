export type LicenseType =
  | 'apache license 2.0'
  | 'MIT'
  | 'gnu agplv3'
  | 'gnu gplv3'
  | 'gnu lgplv3'
  | 'mozilla public license 2.0'
  | 'the unlicense'

export interface OptionsType {
  email?: string
  website?: string
  year: Number
}
