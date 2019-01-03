/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n === 0) { return []; }
    return genTree(1, n);
};

function genTree(start, end) {
	const list = [];
	if (start > end) {
        list.push(null);
		return list;
	}
	if (start === end) {
		list.push(new TreeNode(start));
		return list;
	}

	for(let i = start; i <= end; i++) {
		const left = genTree(start, i - 1);
		const right = genTree(i + 1, end);
		for(let lnode of left) {
			for(let rnode of right) {
				const node = new TreeNode(i);
				node.left = lnode;
				node.right = rnode;
				list.push(node);
			}
		}
	}
	return list;
}
