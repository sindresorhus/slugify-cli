import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['Déjà Vu!']);
	t.is(stdout, 'deja-vu');
});

test('separator', async t => {
	const {stdout} = await execa('./cli.js', ['Unicorns & Rainbows', '--separator=_']);
	t.is(stdout, 'unicorns_and_rainbows');
});

test('lowercase', async t => {
	const {stdout} = await execa('./cli.js', ['Déjà Vu!', '--no-lowercase']);
	t.is(stdout, 'Deja-Vu');
});

test('decamelize', async t => {
	const {stdout} = await execa('./cli.js', ['fooBar', '--no-decamelize']);
	t.is(stdout, 'foobar');
});

test('preserve-leading-underscore', async t => {
	const {stdout} = await execa('./cli.js', ['_foo_bar', '--preserve-leading-underscore']);
	t.is(stdout, '_foo-bar');
});
