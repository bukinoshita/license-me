# license-me [![Build Status](https://travis-ci.org/bukinoshita/license-me.svg?branch=master)](https://travis-ci.org/bukinoshita/license-me)

> Create a license for your project


## Install

```
$ npm install --save license-me
```


## Usage
```js
const licenseMe = require('license-me')

licenseMe('mit', 'Bu Kinoshita')
// => License created!
```


## API

### licenseMe(type, name, [options])

returns a `promise`.

#### type

Type: `string`<br/>
Options: `MIT`, `Apache License 2.0`<br/>
Default: `MIT`<br/>
Required

License type

#### name

Type: `string`<br/>
Required

Your name

#### options

Type: `object`

##### email

Type: `string`<br/>

Personal email (only `MIT` License uses it)

##### website

Type: `string`<br/>

Personal website (only `MIT` License uses it)

##### year

Type: `string`<br/>
Default: `new Date().getFullYear()`<br/>

License year


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
