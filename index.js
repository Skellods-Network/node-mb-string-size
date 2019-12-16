'use strict';

/**
 * Calculate size of a string
 * 
 * @param {string|number[]} str UTF-8 string or array of character codes
 * @result {number}
 */
module.exports = function (str) {
    if (typeof str === 'undefined' || typeof str.length === 'undefined') {
        return 0;
    }

    var charCodes = [];
    var i = 0;
    var strSize = str.length;

    if (Array.isArray(str)) {
        i = strSize;
        charCodes = str;
    }
    else {
        var isString = typeof str === 'string';

        while (i < strSize) {
            if (isString) {
                charCodes.push(str.charCodeAt(i));
            }
            else {
                charCodes.push(str[i]);
            }

            i++;
        }
    }

    while (i > 0) {
        var code = charCodes[i];

        if (code > 0x7f && code <= 0x7ff) {
            strSize++;
        }
        else if (code > 0x7ff && code <= 0xffff) {
            if (code < 0xDC00 || code > 0xDFFF) {
                strSize += 2;
            }
        }

        i--;
    }

    return strSize;
};
