/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// quick select o(n) time
var findKthLargest = function(nums, k) {
    k -= 1;
    return quickSelect(nums, k, 0, nums.length - 1);
    // return quicksort(nums, 0, nums.length - 1).reverse()[k-1];
};

function quickSelect(nums, k, low, high) {
    const p = nums[high];
    let small = low;
    for (var i = low; i < high; i++) {
        if (nums[i] < p) {
            swap(nums, small++, i);
        }
    }
    swap(nums, small, high);

    if (high - k > small) {
        return quickSelect(nums, k, small + 1, high);
    } else if (high - k === small) {
        return p;
    } else {
        return quickSelect(nums, k - (high - small) - 1 , low, small - 1);
    }
}

// function quicksort(num, low, high) {
//     if (low < high) {
//         const p = partition(num, low, high);
//         quicksort(num, low, p - 1);
//         quicksort(num, p + 1, high);
//     }
//     return num;
// }

// function partition(arr, low, high) {
//     const p = arr[high];
//     let small = low - 1;
//     for (var i = low; i < high; i++) {
//         if (arr[i] <= p) {
//             small++;
//             swap(arr, i, small);
//         }
//     }
//     swap(arr, small + 1, high);
//     return small + 1;
// }

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
