/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var res = [];
    intervals.push(newInterval);
    intervals.sort((i1, i2) => i1.start > i2.start ? 1 : -1 );
    if(intervals.length) {
        res.push(intervals[0]);
    }
    for(var i = 1; i < intervals.length; i++) {
        var interval = intervals[i];
        var last = res.pop();
        if(interval.start > last.end) {
            res.push(last);
            res.push(interval);
        } else {
            last.end = Math.max(last.end, interval.end);
            res.push(last);
        }
    }
    return res;
};

console.log(insert([[1,3],[6,9]], [2,5]));
