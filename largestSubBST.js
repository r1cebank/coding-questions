const TreeNode = require('./treeNode');

const rootNode = new TreeNode(12);
rootNode.left = new TreeNode(6, new TreeNode(5));
rootNode.right = new TreeNode(9, new TreeNode(8), new TreeNode(10));


function largestBST (rootNode) {
    let finding = {
        root: rootNode,
        min: 0,
        max: 0,
        largestSize: -1
    };

    getBSTSize(finding);

    return finding.largestSize;
}

function getBSTSize(finding) {
    if (finding.root) {
        // console.log(`at node ${finding.root.value}`);
    }
    if (!finding.root) {
        finding.max = -0;
        finding.min = 0x7fffffff;
        largestSize = 0;
        return true;
    }
    const leftFinding = {
        root: finding.root.left,
        min: 0,
        max: 0,
        largestSize: 0
    }
    const left = getBSTSize(leftFinding);
    const rightFinding = {
        root: finding.root.right,
        min: 0,
        max: 0,
        largestSize: 0
    }
    const right = getBSTSize(rightFinding);
    let overall = false;
    if (left && right && finding.root.value >= leftFinding.max && finding.root.value <= rightFinding.min) {
        finding.largestSize = leftFinding.largestSize + rightFinding.largestSize + 1;
        // console.log(`largest size at: ${finding.largestSize}`);
        overall = true;

        finding.min = (finding.root.value < leftFinding.min) ? finding.root.value : leftFinding.min;
        finding.max = (finding.root.value > rightFinding.max) ? finding.root.value : rightFinding.max;

        return overall;
        
    } else {
        finding.largestSize = (leftFinding.largestSize > rightFinding.largestSize) ? leftFinding.largestSize : rightFinding.largestSize;
    }
}

console.log(largestBST(rootNode));