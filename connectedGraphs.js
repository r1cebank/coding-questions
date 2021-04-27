const adj_list = [];
const visited = new Array(7).fill(false);

adj_list[1] = [2, 3];
adj_list[2] = [1, 3];
adj_list[3] = [1, 2];
adj_list[4] = [5];
adj_list[5] = [4];
adj_list[6] = [];

const adj_matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];


function dfs(i) {
    if (adj_list[i] && !visited[i]) {
        visited[i] = true;
        adj_list[i].forEach((v) => dfs(v));
    }
}

function dfs_matrix(n) {
    if (!visited[n]) {
        visited[n] = true;
        for (let i = 0; i < adj_matrix[n].length; i++) {
            if (adj_matrix[n][i]) {
                dfs_matrix(i);
            }
        }
    }
}

function connectedComponents() {
    let connected = 0;

    for (let i = 1; i < visited.length; i++) {
        if (!visited[i]) {
            connected++;
            dfs(i);
        }
    }

    console.log(visited);

    console.log(`There are ${connected} components.`);
}

connectedComponents();


