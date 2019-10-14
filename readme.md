# license-me [![Build Status](https://travis-ci.org/bukinoshita/license-me.svg?branch=master)](https://travis-ci.org/bukinoshita/license-me)

> Create a license for your project

## Install

```
$ yarn add license-me
```

## Usage

```js
const licenseMe = require('license-me')

licenseMe('mit', 'Bu Kinoshita', { year: 2019 })
// => License created!
```

## API

### licenseMe(name, type, [options])

returns a `promise`.

#### name

Type: `string`<br/>
Required

Your name

#### type

Type: `string`<br/>
Options: `MIT`, `Apache License 2.0`, `GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `The Unlicense`<br/>
Required

License type

#### options

Type: `object`

##### year

Type: `string`<br/>
Required

##### email

Type: `string`<br/>

Personal email (only `MIT` License uses it)

##### website

Type: `string`<br/>

Personal website (only `MIT` License uses it)

License year

## Related

- [license-me-cli](https://github.com/bukinoshita/license-me-cli) — Create a license for your project

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
