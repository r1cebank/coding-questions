/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    let nodes = [];
    if (K === 0) {
        nodes.push(target.val);
        return nodes;
    }
    traverse(nodes, root, target, K, 0);
    return node;
};

function traverse(nodes, root, target, K, val) {
    if (!root) return 0;
    if (val === k) {
        nodes.push(root.val);
        return 0;
    }

    let right = 0;
    let left = 0;
    if (root.val === target.val || val > 0) {
        left = traverse(nodes, root.left, target, K, val + 1);
        right = traverse(nodes, root.right, target, K, val + 1);
    } else {
        left = traverse(nodes, root.left, target, K, val);
        right = traverse(nodes, root.right, target, K, val);

    }

    if (left === K || right === K) {
        nodes.push(root.val);
        return 0;
    }
    if (root.val === target.val) {
        return 1;
    }
    if (left > 0) {
        traverse(nodes, root.right, target, K, left + 1);
    }
    if (right > 0) {
        traverse(nodes, root.left, target, K, right + 1);
    }

    if (left > 0 || right > 0) {
        return left > 0 ? left + 1 : right + 1;
    }
    return 0;
}
