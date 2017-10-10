function find(matrix, number) {
    const row = matrix.length;
    const col = matrix[0].length;

    let start = 0;
    let end = row * col - 1;

    while(start <= end) {
        const mid = parseInt((end - start) / 2) + start;
        const row_actual = parseInt(mid / col);
        const col_actual = mid - (row_actual * col);
        if (matrix[row_actual][col_actual] === number) {
            return true;
        } else if (matrix[row_actual][col_actual] > number) {
            end = mid - 1;
        } else if (matrix[row_actual][col_actual] < number) {
            start = mid + 1;
        }
    }
    return false;
};

module.exports = find;

// const matrix = [
//     [1, 3, 5],
//     [7, 9, 11],
//     [13, 15, 17]
// ];

// console.log(find(matrix, 9));