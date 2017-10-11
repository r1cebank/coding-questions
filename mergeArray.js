function mergeArray(array1, array2) {
    const length = array1.length > array2.length ? array1.length : array2.length;
    const finalArray = [];
    let arrayIndex1 = 0;
    let arrayIndex2 = 0;

    while (arrayIndex1 < array1.length || arrayIndex2 < array2.length) {
        if (!array1[arrayIndex1]) {
            finalArray.push(array2[arrayIndex2++]);
            continue;
        }
        if (!array2[arrayIndex2]) {
            finalArray.push(array1[arrayIndex1++]);
            continue;
        }    
        if (array1[arrayIndex1] <= array2[arrayIndex2]) {
            finalArray.push(array1[arrayIndex1++]);
        } else if (array1[arrayIndex1] > array2[arrayIndex2]) {
            finalArray.push(array2[arrayIndex2++]);
        }
    }
    return finalArray;
}

module.exports = mergeArray;

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 7, 10, 11];

console.log(mergeArray(arr1, arr2));