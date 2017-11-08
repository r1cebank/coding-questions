/**
 * @pnumsrnumsm {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while(i < nums.length){
        if(nums[i] === i+1 || nums[i] <= 0 || nums[i] > nums.length) i++;
        else if(nums[nums[i]-1] !== nums[i]) swap(nums, i, nums[i]-1);
        else i++;
    }
    i = 0;
    while(i < nums.length && nums[i] === i+1) i++;
    return i+1;
};

var swap = function (nums, i1, i2) {
    const tmp = nums[i1];
    nums[i1] = nums[i2];
    nums[i2] = tmp;
}

console.log(firstMissingPositive([2, 0]));