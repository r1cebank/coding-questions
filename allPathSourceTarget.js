/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function (graph) {
    const ans = [];
    dfs(0, graph,  ans, [0]);
    return ans;
};

function dfs(i, graph, ans, path) {
    if (i === graph.length - 1) {
        ans.push(path);
    } else {
        for (let edge of graph[i]) {
            const newPath = path.slice(0);
            newPath.push(edge);
            dfs(edge, graph, ans, newPath);
        }
    }
}

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
