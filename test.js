'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isPsd = require('./');

function check(filename) {
	return isPsd(readChunk.sync(filename, 0, 4));
}

it('should detect PSD from Buffer', function () {
	assert(check('fixture.psd'));
	assert(!check('fixture.png'));
});
