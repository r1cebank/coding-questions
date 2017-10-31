/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let curr = [];
    const parenL = '([{';
    const parenR = ')]}';
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if (curr.length === 0) {
            if (parenL.indexOf(char) !== -1) {
                curr.push(char);
            }
            if (parenR.indexOf(char) !== -1) {
                return false;
            }
            continue;
        } else {
            if (parenL.indexOf(char) !== -1) {
                curr.push(char);
                continue;
            }
            if (parenR.indexOf(char) === -1 && parenL.indexOf(char) === -1) {
                continue;
            }
            if (parenR.indexOf(char) === parenL.indexOf(curr[curr.length - 1])) {
                curr.pop();
            } else {
                return false;
            }
        }
    }
    return curr.length ? false : true;
};

console.log(isValid('([)]'));