/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var findOne = function (haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};
function isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
  
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }
  
var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return [];
    }
    const answer = [];
    const answerSet = {};
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (!answerSet[sum]) {
                answerSet[sum] = [];
            }
            answerSet[sum].push([i, j]);
        }
    }
    const finalAnswer = [];
    let partials = Object.keys(answerSet);
    partials = partials.concat(partials);
    for(let i = 0; i < partials.length - 1; i++) {
        for(let j = i + 1; j < partials.length; j++) {
            if (parseInt(partials[i]) + parseInt(partials[j]) === target) {
                answerSet[partials[i]].map((p1) => {
                    answerSet[partials[j]].map((p2) => {
                        if (!findOne(p1, p2)) {
                            const temp = [
                                nums[p1[0]],
                                nums[p1[1]],
                                nums[p2[0]],
                                nums[p2[1]]
                            ].sort();
                            if (!isArrayInArray(finalAnswer, temp)) {
                                finalAnswer.push(temp);
                            }
                        }
                    });
                });
            }
        }
    }
    return finalAnswer;
};

console.log(fourSum([1,4,-3,0,0,0,5,0], 0));