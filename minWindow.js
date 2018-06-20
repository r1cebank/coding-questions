/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let counter = {};
    t.split('').forEach((c) => counter[c] = (counter[c] || 0) + 1);
    let count = t.length;

    let l = 0;
    let r = 0;
    let start = 0;
    let minLen = Infinity;

    while (r < s.length) {
        if (counter[s.charAt(r++)]-- > 0) {
            count--;
        }
        while (count === 0) {
            if (r - l < minLen) {
                minLen = r - l;
                start = l;
            }
            if (counter[s.charAt(l++)]++ === 0) {
                count++;
            }
        }
    }
    return minLen === Infinity ? '' : s.substr(start, minLen);
};
