/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    candidates.sort();
    dfs(candidates, target, 0, [], res);
    return res;
};

var dfs = function(nums, target, index, path, res) {
    if (target < 0) {
        return;
    }
    if (target === 0) {
        res.push(path);
        return;
    }
    for (let i = index; i < nums.length; i++) {
        dfs(nums, target - nums[i], i, path.concat(nums[i]), res);
    }
}


console.log(combinationSum([2, 6, 3, 7], 7));