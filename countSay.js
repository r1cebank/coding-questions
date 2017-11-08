/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
    let res = '1';
    if (n === 0) {
        return '';
    }
    while (--n) {
        let cur = '';
        for (let i = 0; i < res.length; i++) {
            let count = 1;
            while ((i + 1 < res.length && (res[i] === res[i + 1]))) {
                count++;    
                i++;
            }
            cur += (count + '') + res[i];
        }
        res = cur;
    }
    return res;
};

console.log(countAndSay(4));