/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length === 0) { return b; }
    if (b.length === 0) { return a; }
    if (a[a.length - 1] === '1' && b[b.length - 1] === '1') {
        return addBinary(addBinary(a.slice(0, -1), b.slice(0, -1)), '1') + '0';
    }
    if (a[a.length - 1] === '0' && b[b.length - 1] === '0') {
        return addBinary(a.slice(0, -1), b.slice(0, -1)) + '0';
    } else {
        return addBinary(a.slice(0, -1), b.slice(0, -1)) + '1';
    }
};

console.log(addBinary('11', '1'));
