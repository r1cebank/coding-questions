/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort();
    dfs(candidates, target, 0, [], res);
    return res;
};

function isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
  
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}

var dfs = function(nums, target, index, path, res) {
    if (target < 0) {
        return;
    }
    if (target === 0) {
        if (!isArrayInArray(res, path)) {
            res.push(path);
        }
        return;
    }
    for (let i = index; i < nums.length; i++) {
        const numsCpy = nums.slice(0);
        numsCpy.splice(index, 1);
        dfs(numsCpy, target - nums[i], i, path.concat(nums[i]), res);
    }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
