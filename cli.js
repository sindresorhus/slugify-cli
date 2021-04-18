#!/usr/bin/env node
import meow from 'meow';
import slugify from '@sindresorhus/slugify';

const cli = meow(`
	Usage
	  $ slugify <string>

	Options
	  --separator=<string>           Word separator [Default: -]
	  --no-lowercase                 Don’t make the slug lowercase
	  --no-decamelize                Don’t convert camelCase to separate words
	  --preserve-leading-underscore  If your string starts with an underscore, it will be preserved in the slugified string

	Examples
	  $ slugify 'Déjà Vu!'
	  deja-vu
	  $ slugify 'Unicorns & Rainbows' --separator='_'
	  unicorns_and_rainbows
`, {
	flags: {
		separator: {
			type: 'string'
		},
		lowercase: {
			type: 'boolean',
			default: true
		},
		decamelize: {
			type: 'boolean',
			default: true
		},
		preserveLeadingUnderscore: {
			type: 'boolean',
			default: false
		}
	}
});

const [text] = cli.input;

console.log(slugify(text, cli.flags));
