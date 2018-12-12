/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((prev, curr) => { return prev + curr; }, 0);
    if (sum & 1) return false;
    const target = sum / 2;

    const temp = new Array(nums.length + 1).fill(false);
    temp[0] = true;
    for (const num of nums) {
        if (temp[target - num]) return true;
        for (let i = target; i >= num; i--) {
            temp[i] = temp[ i - num ];
        }
    }
    return false;
};




console.log(canPartition([1, 4, 2, 4, 5, 2]));
