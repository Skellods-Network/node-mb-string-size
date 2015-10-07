'use strict';


/**
 * Calculate size of a string
 * The problem when using string length or even buffer length is that certain character lengths (especially asian symbols) will be counted in a wrong way for UTF8
 * This might be a problem (e.g. for SHPS when sending the content-length)
 * This function aims to solve the problem by adding to the count when special characters are detected
 * 
 * @param $str UTF-8 String
 * @result integer
 */
module.exports = function ($str) {

    if (typeof $str === 'undefined' || typeof $str.length === 'undefined') {

        return 0;
    }

    var i = 0;
    var c = $str.length;
    if (typeof $str !== 'array') {

        var tmp = [];
        var isStr = typeof $str === 'string';
        while (i < c) {

            isStr ? tmp.push($str.charCodeAt(i))
                  : tmp.push($str[i]);

            i++;
        }

        $str = tmp;
    }
    else {

        i = c;
    }

    while (i > 0) {

        var code = $str[i];
        if (code > 0x7f && code <= 0x7ff) {

            c++;
        }
        else if (code > 0x7ff && code <= 0xffff) {

            if (code < 0xDC00 || code > 0xDFFF) {

                c += 2;
            }
        }

        i--;
    }

    return c;
};
