# Node-MB-String-Size

Calculate the length of a string. DEPRECATION WARNING!

The original problem was, that `buffer.length` would calculate a wrong byte size for certain UTF-8 symbols.
This library was implemented to fix the problem by iterating over the string and detecting the multibyte-symbols, yielding a correct byte size.

However, current NodeJS versions correctly calculate the byte size, so this library is obsolete.
I cleaned everything up one final time, so if you are still on a very old version of NodeJS (for example < 6),
you can use this library to get a correct byte size. I will not maintain it any longer, though, as the problem does not exist anymore.

### Version
1.0.4

### Installation
```sh
$ npm install node-mb-string-size
```

How To Use
----

```js
var strLength = require('node-mb-string-size');

var str = 'TEST - äÖüß日本語;';
console.log('The string `' + str + '` is ' + strLength(str) + ' bytes in size.');
```

Version History
----

```undefined
1.0.4 - Clean code and deprecate lib
1.0.3 - Corrected README.md
1.0.2 - Added Keywords
1.0.1 - Wrong Folder published :/
```

License
----

MIT

**Free Software, Hell Yeah!**
