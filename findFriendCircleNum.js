/**
 * @param {number[][]} M
 * @return {number}
 */

function dfs(M, visited, i) {
    for (let j = 0; j < M.length; j++) {
        if (M[i][j] === 1 && visited[j] === 0) {
            visited[j] = 1;
            dfs(M, visited, j);
        }
    }
}
var findCircleNum = function (M) {
    const visited = new Array(M.length).fill(0);
    let count = 0;
    for (let i = 0; i < M.length; i++) {
        if (!visited[i]) {
            count++;
            dfs(M, visited, i);
        }
    }
    return count;
};


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));
