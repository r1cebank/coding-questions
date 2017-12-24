/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) { return false; }
    if (matrix[0][0] > target) { return false; }
    if (matrix[0][0] === target) { return true; }
    let row = 0;
    for (let i = 0; i < matrix.length; i++) {
        row = i;
        if (matrix[i][0] > target) {
            row -= 1;
            break;
        }
    }
    for (let i = 0; i < matrix[row].length; i++) {
        if (matrix[row][i] === target) {
            return true;
        }
    }
    return false;
};

console.log(searchMatrix(
    [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ],
    3
));
