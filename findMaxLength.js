/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }
    const sumIndexMap = [-1];
    let sum = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sumIndexMap[sum] !== undefined) {
            max = Math.max(max, (i - sumIndexMap[sum]));
        } else {
            sumIndexMap[sum] = i;
        }
    }
    return max;
};

console.log(findMaxLength([0,0,1]));
