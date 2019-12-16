const nmbss = require('.');

const testStr = 'TEST - äÖüß日本語;';
const testStrLength = 25;
const strLength = testStr.length;
const bufferSize = Buffer.from(testStr).length;
const nmbssLength = nmbss(testStr);

console.log(`The test string "${testStr}" yields the following results:

  should value: ${testStrLength}
  string.length(): ${strLength}
  buffer.length(): ${bufferSize}
  this lib output: ${nmbssLength}
`);
