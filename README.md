# Node-MB-String-Size

Calculate the length of a string

The problem when using string.length or even having a buffer to calculate its length is that certain character lengths (especially asian symbols) will be counted in a wrong way for UTF8 (namely 1 Byte / character).
This might be a problem (e.g. for SHPS when sending the content-length). Node-MB-String-Size aims to solve it by adding to the byte count when special characters are detected.

This module was first created for SHPS, but then separated for easy use by everyone :)

### Version
1.0.2

### Installation
```sh
$ npm install node-mb-string-size
```

How To Use
----

```js
var strLength = require('node-mb-string-size');

var str = 'TEST - д÷ья???;';
console.log('The string `' + str + '` is ' + strLength(str) + 'bytes in size.');
```

Version History
----

1.0.2 - Added Keywords

1.0.1 - Wrong Folder published :/

License
----

MIT

**Free Software, Hell Yeah!**
