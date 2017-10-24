/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (('' + x).length === 1) {
        return true;
    }
    if (('' + x).length === 2) {
        if (('' + x)[0] === ('' + x)[1]) {
            return true;
        } else {
            return false;
        }
    }
    return (('' + x)[0] === ('' + x)[('' + x).length - 1]) && isPalindrome(('' + x).substr(1).slice(0, -1));
};

console.log(isPalindrome(12121));