/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = 0;
    let w = 0;
    let b = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[b++] = 2;
            nums[w++] = 1;
            nums[r++] = 0;
        } else if (nums[i] === 1) {
            nums[b++] = 2;
            nums[w++] = 1;
        } else if (nums[i] === 2) {
            nums[b++] = 2;
        }
    }
};

var x = [0, 1, 2, 1, 1, 0, 2, 2, 2, 2, 1, 1, 1];

sortColors(x);

console.log(x);
