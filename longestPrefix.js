/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let longestStr = 0;
    strs.map((str) => {
        if (longestStr < str.length) {
            longestStr = str.length;
        }
    });
    for(let i = 0; i < longestStr; i++) {
        let match = true;
        const check = strs[0][i];
        strs.map((str) => {
            if (str[i] !== check) {
                match = false;
            }
        })
        if (!match) {
            break;
        } else {
            prefix = prefix + check;
        }
    }
    return prefix;
};


console.log(longestCommonPrefix(['hello', 'helloworld', 'hella']));