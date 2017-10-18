function partition(array, start, end) {
    let pivot = array[end];
    let pIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] < pivot) {
            const temp = array[pIndex];
            array[pIndex] = array[i];
            array[i] = temp;
            pIndex++;
        }

    }
    const temp = array[pIndex];
    array[pIndex] = array[end];
    array[end] = temp;
    return pIndex;
}

function quickSort(array, start, end) {
    if (start < end) {
        const pivot = partition(array, start, end);
        quickSort(array, start, pivot - 1);
        quickSort(array, pivot + 1, end);
    }
}

const array = [];

for (let i = 0; i < 100; i++) {
    array.push(parseInt(Math.random() * 100));
}

quickSort(array, 0, array.length - 1);
console.log(array);