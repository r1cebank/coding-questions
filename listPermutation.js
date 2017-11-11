/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }
    if (nums.length === 2) {
        return [
            [nums[0], nums[1]],
            [nums[1], nums[0]]            
        ]
    }
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        const p = [nums[i]];
        const re = nums.slice(0);
        re.splice(i, 1);
        const result = permute(re);
        result.map((r) => {
            ans.push(p.concat(r));
        });
    }
    return ans;
};

console.log(permute([1, 2, 3, 4]));