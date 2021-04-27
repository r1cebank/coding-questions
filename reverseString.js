/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let wordBuffer = [];
    let finalBuffer = [];
    for (let i = s.length - 1; i >= 0; i--) {
        const currentChar = s.charAt(i);
        if (currentChar !== ' ') {
            wordBuffer.unshift(currentChar);
        } else {
            if (wordBuffer.length) {
                finalBuffer.push(wordBuffer.join(''))
                wordBuffer = [];
            }
        }
    }
    if (wordBuffer.length) {
        finalBuffer.push(wordBuffer.join(''));
    }
    return finalBuffer.join(' ');
};