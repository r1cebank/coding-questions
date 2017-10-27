/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
    var closest = Number.Infinity;
    var gap = -1;

    nums.sort(function(a, b) { return a - b });
    for(var i = 0; i < nums.length - 2; i++) {
        var low = i + 1;
        var high = nums.length - 1;

        while(low < high) {
            var sum = nums[i] + nums[low] + nums[high];
            partialGap = Math.abs(target - sum);
            if(partialGap < gap || gap === -1) {
                gap = partialGap;
                closest = sum;
            }

            if(sum === target) {
                return target;
            } else if (sum < target) {
                low++;
            } else {
                high--;
            }
        }
    }
    return closest;
};
console.log(threeSumClosest([1,1,-1,-1,3], 3));