# is-psd

> Check if a Buffer/Uint8Array is a [PSD](https://en.wikipedia.org/wiki/Adobe_Photoshop#File_format) image

## Install

```
$ npm install is-psd
```

## Usage

##### Node.js

```js
import {readChunkSync} from 'read-chunk';
import isPsd from 'is-psd';

const buffer = readChunkSync('unicorn.psd', {length: 4});

isPsd(buffer);
//=> true
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.psd');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	isPsd(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```

## API

### isPsd(buffer)

Accepts a `Buffer` (Node.js) or `Uint8Array`.

It only needs the first 4 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
