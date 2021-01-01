# is-psd

> Check if a Buffer/Uint8Array is a [PSD](https://en.wikipedia.org/wiki/Adobe_Photoshop#File_format) image


## Install

```
$ npm install is-psd
```


## Usage

##### Node.js

```js
const readChunk = require('read-chunk'); // npm install read-chunk
const isPsd = require('is-psd');
const buffer = readChunk.sync('unicorn.psd', 0, 4);

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

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 4 bytes.


## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
