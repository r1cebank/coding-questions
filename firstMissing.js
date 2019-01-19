function firstMissing(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0 && numbers[i] < numbers.length && (numbers[numbers[i]] !== numbers[i])) {
            swap(numbers, i, numbers[i]);
            i--;
        }
    }
    let k = 0;
    while (k < numbers.length && numbers[k] === k) {
        k++;
    }
    if (numbers.length == 0 || k < numbers.length) {
        return k;
    } else {
        return numbers[0] === k ? k + 1 : k;
    }
    console.log("sss")
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const numbers = [1, 2, 0];


console.log(firstMissing(numbers));
