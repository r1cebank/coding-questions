/**
 * @param {number} n
 * @return {number[][]}
 */

function zip(rows) {
    if (rows.length === 1) { return rows; }
    if (rows.length < 1) { return []; }
    const ans = rows[0].map(function(_,c) {
        return rows.map(function(row) {
            return row[c];
        });
    }).reverse();
    return ans;
};

function range(low, high) {
    const ans = [];
    for (let i = low; i < high; i++) {
        ans.push(i);
    }
    return ans;
}

var generateMatrix = function(n) {
    let ans = [];
    let lo = n * n + 1;
    while (lo > 1) {
        const hi = lo;
        lo = lo - ans.length;
        const rangeA = [range(lo, hi)];
        const zipped = zip(ans.reverse());
        ans = rangeA.concat(...zipped);
        debugger;
    }
}

console.log(generateMatrix(3));
