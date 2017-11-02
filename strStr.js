/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let startIndex = -1;
    let patternIndex = 0;
    if (needle === '') { return 0; }
    if (needle.length > haystack.length) { return startIndex; }
    if (needle === haystack) { return 0; }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[patternIndex]) {
            if (patternIndex === 0) { startIndex = i; }
            if (patternIndex === needle.length - 1) {
                return startIndex;
            }
            patternIndex++;
            continue;
        } else {
            i = i - patternIndex;
            patternIndex = 0;
            startIndex = -1
        }
    }
    return (patternIndex === needle.length) ? startIndex : -1;
};

console.log(strStr('mississippi', 'sippia'));