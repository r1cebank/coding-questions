const TreeNode = require('./treeNode');

const rootNode = new TreeNode(12);
rootNode.left = new TreeNode(6, new TreeNode(5));
rootNode.right = new TreeNode(9, new TreeNode(8), new TreeNode(10));

/**
 *      12
 *     6    9
 *    5 N  8  10
 */


function bfs(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const top = queue.shift();
        console.log(top.value);
        top.left && queue.push(top.left);
        top.right && queue.push(top.right);
    }
}

bfs(rootNode);