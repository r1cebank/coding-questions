/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const zeros = [];
    for (let i = 0; i < matrix.length; i++) { zeros.push(new Array(matrix[0].length).fill(0)); }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                for (let row = 0; row < matrix[i].length; row++) {
                    zeros[i][row] = 1;
                }
                for (let col = 0; col < matrix.length; col++) {
                    zeros[col][j] = 1;
                }
            }
        }
    }
    for (let i = 0; i < zeros.length; i++) {
        for (let j = 0; j < zeros[i].length; j++) {
            if (zeros[i][j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
};

var matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 1]
];

setZeroes(matrix);

console.log(matrix);
