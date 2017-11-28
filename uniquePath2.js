/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let grid = [];
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    for (let i = 0; i <= m; i++) {grid[i] = new Array(n + 1).fill(0);}
    grid[0][1] = 1;
    for(let i = 1; i<=m; i++){
        for(let j = 1; j<=n; j++){
            if (!obstacleGrid[i - 1][j - 1])
                grid[i][j] = grid[i-1][j] + grid[i][j - 1];
        }
    }
    return grid[m][n];
};

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]));
