/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let maxEnd = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentMax = nums[i] + currentMax > nums[i] ? nums[i] + currentMax : nums[i];
        maxEnd = maxEnd > currentMax ? maxEnd : currentMax;
    }
    return maxEnd;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
