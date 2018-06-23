function binSearch(array, low, high, key) {
    if (high < low) {
        return -1;
    }
    const mid = parseInt((high + low) / 2);
    if (key === array[mid]) { return mid; }
    if (key > array[mid]) {
        return binSearch(array, (mid + 1), high, key);
    }
    return binSearch(array, low, mid - 1, key);
}
function findInRotated(array, item) {
    let pivot = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1]  > array[i]) {
            pivot = i;
            break;
        }
    }
    if (array[pivot] === item) {
        return pivot;
    }
    if (array[pivot] < item) {
        return binSearch(array, pivot + 1, array.length - 1, item);
    }
    return binSearch(array, 0, pivot - 1, item);
}

const arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

console.log(findInRotated(arr, 5));
