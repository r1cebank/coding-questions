/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1, level = 0, water = 0;
    while (l < r) {
        let lower = height[height[l] < height[r] ? l++ : r--];
        level = level > lower ? level : lower;
        water += level - lower;
    }
    return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));