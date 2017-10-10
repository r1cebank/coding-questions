function find(matrix, number) {
    let row = 0;
    let col = matrix[0].length - 1;

    while(row < matrix.length && col > 0) {
        if (matrix[row][col] === number) {
            return true;
        } else if (matrix[row][col] < number) {
            row += 1;
        } else if (matrix[row][col] > number) {
            col -= 1;
        }
    }
    return false;
};

module.exports = find;

const matrix = [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
];

console.log(find(matrix, 17));