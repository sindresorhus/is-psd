import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isPsd from './index.js';

const check = filename => isPsd(readChunkSync(filename, {length: 4}));

test('detects PSD from Buffer', t => {
	t.true(check('fixture.psd'));
	t.false(check('fixture.png'));
});
