const TreeNode = require('./treeNode');

const root = new TreeNode(1);

root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, new TreeNode(7), new TreeNode(6));


function verticalSum(root, col) {
    const nodes = [];
    const result = {};
    const startingCol = 0;
    nodes.push({ node: root, col: startingCol });
    while(nodes.length) {
        const node = nodes.pop();
        result[node.col] = (result[node.col] || 0) + node.node.value;
        if (node.node.left) {
            nodes.push({ node: node.node.left, col: node.col - 1});
        }
        if (node.node.right) {
            nodes.push({ node: node.node.right, col: node.col + 1});
        }
    }
    return result[col];
}

console.log(verticalSum(root, 0));
