var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    
    while(left <= right) {
        var mid = parseInt((left + right)/2);
        if(nums[mid] === target) {
            return mid;
        }
        
        if(nums[mid] >= nums[left]) { // correct order
            
            if(nums[left] <= target && target < nums[mid]) {
                // target is within the correct order part
                right = mid - 1;
            } else {
                // target is not within the correct order part
                left = mid + 1;
            }
        } else { // incorrect order
            if(nums[mid] < target && target <= nums[right]) {
                // target is within the correct order part
                left = mid + 1;
            } else {
                // target is not within the correct order part
                right = mid - 1;
            }
        }
    }
    
    return -1;
};