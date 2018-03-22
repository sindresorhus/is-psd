'use strict';
module.exports = buffer => {
	if (!buffer || buffer.length < 4) {
		return false;
	}

	return buffer[0] === 56 &&
		buffer[1] === 66 &&
		buffer[2] === 80 &&
		buffer[3] === 83;
};
