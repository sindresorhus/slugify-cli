# slugify-cli [![Build Status](https://travis-ci.org/sindresorhus/slugify-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/slugify-cli)

> Slugify a string


## Install

```
$ npm install --global slugify-cli
```


## Usage

```
$ slugify --help

  Slugify a string

  Usage
    $ slugify <string>

  Options
    --separator=<string>           Word separator [Default: -]
    --no-lowercase                 Don’t make the slug lowercase [Default: false]
    --no-decamelize                Don’t convert camelCase to separate words [Default: false]
    --preserve-leading-underscore  If your string starts with an underscore, it will be preserved in the slugified string. [Default: false]

  Examples
    $ slugify 'Déjà Vu!'
    deja-vu
    $ slugify 'Unicorns & Rainbows' --separator='_'
    unicorns_and_rainbows
```


## Related

- [slugify](https://github.com/sindresorhus/slugify) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
