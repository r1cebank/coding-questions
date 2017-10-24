/**
 * @param {string} str
 * @return {number}
 */
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

var myAtoi = function(str) {
    let final = 0;
    let start = 0;
    // Because leetcode is shit, we have to do this:
    let shitCounter = 0;
    for (; str[shitCounter] === ' '; shitCounter++) {}

    str = str.slice(shitCounter);

    const positive = (str[0] === '-') ? false : true;
    if (str[0] === '+' || str[0] === '-') {
        str = str.slice(1);
    }
    if (str === '0') {
        return 0;
    }
    if (str.length === 1) {
        return positive ? str * 1 : str * -1;
    }
    for (; start < str.length; start++) {
        if (isNaN(str[start] * 1) || str[start] === ' ') {
            break;
        }
        final *= 10;
        final += (str[start] * 1);
        if (isNaN(final)) {
            return 0;
        }
        if ((positive && final > INT_MAX) || -final < INT_MIN) {
            return positive ? INT_MAX : INT_MIN;
        }
    }
    return positive ? final : -final;
};

console.log(myAtoi("2147483648"));