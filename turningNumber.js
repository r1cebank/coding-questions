function findTurningIndex(array) {
    let start = 0;
    let end = array.length - 1;
    while(start < end) {
        const midIndex = parseInt((end - start) / 2) + start;
        if (array[midIndex - 1] < array[midIndex] && array[midIndex + 1] < array[midIndex]) {
            return midIndex;
        }
        if (array[midIndex - 1] < array[midIndex] && array[midIndex] < array[midIndex + 1]) {
            start = midIndex;
        }
        if (array[midIndex - 1] > array[midIndex] && array[midIndex] > array[midIndex + 1]) {
            end = midIndex;
        }
    }

}

const array = [2, 5, 9, 10, 11, 2, 1];

console.log(findTurningIndex(array));

module.exports = findTurningIndex;