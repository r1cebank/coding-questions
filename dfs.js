const TreeNode = require('./treeNode');

const rootNode = new TreeNode(12);
rootNode.left = new TreeNode(6, new TreeNode(5));
rootNode.right = new TreeNode(9, new TreeNode(8), new TreeNode(10));

/**
 *      12
 *     6    9
 *    5 N  8  10
 */

function dfs_loop(tree) {
    const nodeList = [];
    nodeList.push(tree);
    while (nodeList.length) {
        const node = nodeList.shift();
        node.right && nodeList.unshift(node.right);
        node.left && nodeList.unshift(node.left);
        console.log(`${node.value}`);
    }
}

function dfs_recur(tree) {
    if (tree) {
        console.log(`${tree.value}`);
        dfs_recur(tree.left);
        dfs_recur(tree.right);
    }
}


console.log('With loop');
dfs_loop(rootNode);
console.log('Without loop');
dfs_recur(rootNode);