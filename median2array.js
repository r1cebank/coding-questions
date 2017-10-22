var findMedianSortedArrays = function(array1, array2) {
    const length = array1.length > array2.length ? array1.length : array2.length;
    const finalArray = [];
    let arrayIndex1 = 0;
    let arrayIndex2 = 0;

    while (arrayIndex1 < array1.length || arrayIndex2 < array2.length) {
        if (array1[arrayIndex1] === undefined) {
            finalArray.push(array2[arrayIndex2++]);
            continue;
        }
        if (array2[arrayIndex2] === undefined) {
            finalArray.push(array1[arrayIndex1++]);
            continue;
        }    
        if (array1[arrayIndex1] <= array2[arrayIndex2]) {
            finalArray.push(array1[arrayIndex1++]);
        } else if (array1[arrayIndex1] > array2[arrayIndex2]) {
            finalArray.push(array2[arrayIndex2++]);
        }
    }
    if (finalArray.length % 2 === 1) {
        return finalArray[parseInt(finalArray.length / 2)];
    } else {
        return (finalArray[parseInt(finalArray.length / 2)] + finalArray[parseInt(finalArray.length / 2) - 1]) / 2;
    }
};

console.log(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]));