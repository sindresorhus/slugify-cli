#!/usr/bin/env node
'use strict';
const meow = require('meow');
const slugify = require('@sindresorhus/slugify');

const cli = meow(`
	Usage
	  $ slugify <string>

	Options
	  --separator=<string>  Word separator [Default: -]

	Examples
	  $ slugify 'Déjà Vu!'
	  deja-vu
	  $ slugify 'Unicorns & Rainbows' --separator='_'
	  unicorns_and_rainbows
`, {
	flags: {
		separator: {
			type: 'string'
		}
	}
});

const [text] = cli.input;

console.log(slugify(text, cli.flags));
