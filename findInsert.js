/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let foundLoc = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) { return i; }
        if (nums[i] < target) {
            foundLoc = i + 1;
        } else {
            break;
        }
    }
    return foundLoc;
};


console.log(searchInsert([1,3,5,6], 3));