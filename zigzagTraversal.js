/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }
    let node_stack = [root];
    let pending_nodes = [];
    const result = [];
    let tempResult = [];
    let direction_lr = true;
    while (node_stack.length) {
        const node = node_stack.shift();
        if (direction_lr) {
            tempResult.push(node.val);
        } else {
            tempResult.unshift(node.val);
        }
        node.left && pending_nodes.push(node.left);
        node.right && pending_nodes.push(node.right);
        if (node_stack.length === 0) {
            result.push(tempResult);
            direction_lr = !direction_lr;
            tempResult = [];
            node_stack = node_stack.concat(pending_nodes);
            pending_nodes = [];
        }
    }
    return result;
};