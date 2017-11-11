/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, curEnd = 0, curFarthest = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		curFarthest = curFarthest > i + nums[i] ? curFarthest : i + nums[i];
		if (i === curEnd) {
			jumps++;
			curEnd = curFarthest;
		}
	}
	return jumps;
};

console.log(jump([2,3,1,1,4]));
