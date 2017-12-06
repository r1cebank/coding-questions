/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const reverse = digits.reverse();
    let carry = true;
    for (let i = 0; i < reverse.length; i++) {
        if (carry) {
            const sum = reverse[i] + 1;
            reverse[i] = sum % 10;
            if (sum > 9) {
                carry = true;
            } else {
                carry = false;
            }
        }
    }
    if (carry) { reverse.push(1); }
    return reverse.reverse();
};

console.log(plusOne([9, 0, 9, 9]));
