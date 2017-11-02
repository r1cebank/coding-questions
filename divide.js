/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

var divide = function(dividend, divisor) {
    if (dividend === divisor) { return 1; }
    const lneg = dividend < 1 ? true : false;
    const rneg = divisor < 1 ? true : false;
    let count = 0;
    let absD = Math.abs(dividend);
    let absDiv = Math.abs(divisor);
    while (absD >= absDiv) {
        let temp = absDiv;
        let i = 1;
        while (absD >= temp) {
            absD -= temp;
            count += i;
            i = (i << 1) >>> 0;
            temp = (temp << 1) >>> 0;
        }
    }
    if (lneg !== rneg) {
        count = -count;
    }
    if (count < INT_MIN) { count = INT_MIN; }
    if (count > INT_MAX) { count = INT_MAX; }
    return count;
};

console.log(divide(-2147483648, -2147483648));