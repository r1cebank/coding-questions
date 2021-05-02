/**
 * @param {string} s
 * @return {number}
 */

var minDeletions = function (s) {
    const freq = {};
    let total = 0

    s.split('').forEach((c) => {
        if (!freq[c]) {
            freq[c] = 0;
        }
        freq[c]++;
    });

    const counters = Object.values(freq);
    counters.sort((a, b) => b - a);


    for (let i = 1; i < counters.length; i++) {
        if (counters[i] >= counters[i - 1]) {
            const val = Math.max(counters[i - 1] - 1, 0);
            total += counters[i] - val;
            counters[i] = val;
        }
    }
    return total;
};