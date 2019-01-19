class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


function serialize(tree) {
    if (!tree) { return '-1'; }
    return tree.value + '|' + serialize(tree.left) + '|' + serialize(tree.right);
}

function deserialize(treeStr) {
    const nodes = treeStr.split('|');
    return deserializeNodes(nodes);
}

function deserializeNodes(nodes) {
    if (nodes[0] === '-1') {
        nodes.splice(0, 1);
        return undefined;
    }
    const root = new TreeNode(nodes[0]);
    nodes.splice(0, 1);
    root.left = deserializeNodes(nodes);
    root.right = deserializeNodes(nodes);
    return root;
}

const head = new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(4)), new TreeNode(8, undefined, new TreeNode(10)));

console.log(head.left.left.value);

const nodeStr = serialize(head);
console.log(nodeStr)
console.log(deserialize(nodeStr))
