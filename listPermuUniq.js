/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }
    if (nums.length === 2) {
        if (nums[0] === nums[1]) {
            return [
                [nums[0], nums[1]]
            ];
        }
        return [
            [nums[0], nums[1]],
            [nums[1], nums[0]]            
        ]
    }
    const ans = [];
    const visited = {};
    for (let i = 0; i < nums.length; i++) {
        if (!visited[nums[i]]) {
            const p = [nums[i]];
            const re = nums.slice(0);
            re.splice(i, 1);
            const result = permuteUnique(re);
            result.map((r) => {
                ans.push(p.concat(r));
            });
            visited[nums[i]] = true;
        }
    }
    return ans;
};

console.log(permuteUnique([1, 2, 3, 3, 5, 6, 6]));