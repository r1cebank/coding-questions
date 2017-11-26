/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function compare(i1, i2) {
    return i1[0] > i2[0];
}
var merge = function(intervals) {
    // Sort the inervals
    const ans = [];
    intervals.sort(compare);
    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i];
        const ansEnd = ans[ans.length - 1];
        if (ans.length && (current[0] < ansEnd[ansEnd.length - 1])) {
            ansEnd[ansEnd.length - 1] = current[current.length - 1] > ansEnd[ansEnd.length - 1] ? current[current.length - 1] : ansEnd[ansEnd.length - 1];
        } else {
            ans.push(intervals[i]);
        }
    }
    return ans;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
