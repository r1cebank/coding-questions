/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function zip(rows) {
    return rows[0].map(function(_,c) {
        return rows.map(function(row) {
            return row[c];
        });
    }).reverse();
};

var spiralOrder = function(matrix) {
    if (matrix.length < 1) { return matrix; }
    return matrix.splice(0, 1)[0].concat(matrix.length > 0 ? spiralOrder(zip(matrix)) : []);
};


console.log(spiralOrder([]));
