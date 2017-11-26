/**
 * @param {number[]} nums
 * @return {number}
 */
var canJump = function(nums) {
    var numLeft = nums[0];
    for(var i = 1; i < nums.length; i++){
        numLeft--;
        if(numLeft < 0){
            return false;
        }
        numLeft = Math.max(nums[i], numLeft);
    }
    return numLeft >= 0;
};

console.log(canJump([1, 0, 1, 0]));
