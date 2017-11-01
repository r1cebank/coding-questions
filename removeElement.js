/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let end = 0;
    for(let i of nums){
        if(i !== val){
            nums[end++] = i
        }
    }
    return end;
};

const nums = [1, 2, 3, 3, 4];

console.log(removeElement(nums, 3), nums);