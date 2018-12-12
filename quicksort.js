function quicksort(num, low, high) {
    if (low < high) {
        const p = partition(num, low, high);
        quicksort(num, low, p - 1);
        quicksort(num, p + 1, high);
    }
    return num;
}

function partition(arr, low, high) {
    const p = arr[high];
    let small = low - 1;
    for (var i = low; i < high; i++) {
        if (arr[i] <= p) {
            small++;
            swap(arr, i, small);
        }
    }
    swap(arr, small + 1, high);
    return small + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const nums = [2, 5, 1, 3, 9, 12, 44, 12, 21];

console.log(quicksort(nums, 0, nums.length - 1));
