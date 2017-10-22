function findMajority(array) {
    let count = 1;
    let majIndex = 0;
    array.map((item, i) => {
        if (item === array[majIndex]) {
            count++;
        } else {
            count--;
        }
        if (!count) {
            majIndex = i;
        }
    });
    return array[majIndex];
}

const array = [1, 2, 2];

console.log(findMajority(array));

module.exports = findMajority;