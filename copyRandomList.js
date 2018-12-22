/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
function copyRandomList(head) {
    return copy(head, {});
}

function copy(node, map) {
    if (!node) return node;
    if (map[node.label]) return map[node.label];

    let n = new RandomListNode(node.label);

    map[node.label] = n;

    n.next = copy(node.next, map);
    n.random = copy(node.random, map);

    return n;
}
