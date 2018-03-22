import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 4));

test('detects PSD from Buffer', t => {
	t.true(check('fixture.psd'));
	t.false(check('fixture.png'));
});
