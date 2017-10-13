const TreeNode = require('./treeNode');

function verify(root) {
    return verifyNode(root, -100000, 100000);
}

function verifyNode(node, min, max) {
    if (!node) {
        return true;
    }
    if (node.value < min || node.value > max) {
        return false;
    }
    return verifyNode(node.left, min, node.value) &&
        verifyNode(node.right, node.value, max);
}

const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(6, new TreeNode(4), new TreeNode(8));
rootNode.right = new TreeNode(14, new TreeNode(12), new TreeNode(16));


console.log(verifyNode(rootNode));

module.exports = verify;