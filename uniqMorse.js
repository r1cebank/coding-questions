/**
 * @param {string[]} words
 * @return {number}
 */

const getIdx = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

var uniqueMorseRepresentations = function(words) {
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    return words.map((w) => w.split('').map((c) => dict[getIdx(c)]).join('')).reduce((p, c) => { p.add(c); return p; }, new Set()).size;
}

console.log(uniqueMorseRepresentations(['a', 'b']));
