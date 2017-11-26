/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let grid = [];
    for (let i = 0; i < m; i++) {grid[i] = [];}
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(i==0||j==0)
                grid[i][j] = 1;
            else
                grid[i][j] = grid[i][j-1] + grid[i-1][j];
        }
    }
    return grid[m-1][n-1];
};

console.log(uniquePaths(3, 7));
