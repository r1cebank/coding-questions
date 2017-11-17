/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const layers = parseInt(matrix.length / 2);
    // Rotate layer
    for (let layer = 0; layer < layers; layer++) {
        const target = matrix.length - layer - 1;
        for (let index = layer; index < target; index++) {
            let offset = index - layer;
            const top = matrix[layer][index];
            const right_side = matrix[index][target];
            const bottom = matrix[target][target - offset]
            const left_side = matrix[target - offset][layer];
            matrix[layer][index] = left_side;
            matrix[index][target] = top;
            matrix[target][target - offset] = right_side;
            matrix[target - offset][layer] = bottom;
        }
    }
};


const matrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ];

rotate(matrix);

console.log(matrix);