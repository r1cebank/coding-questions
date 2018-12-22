/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	return !root || testSymmetric(root.left, root.right);
};
function testSymmetric(left, right) {
	if (!left && !right) { return true; }
	if (!left || !right) { return false; }
	return (left.val === right.val) && testSymmetric(left.left, right.right) && testSymmetric(left.right, right.left);
}
