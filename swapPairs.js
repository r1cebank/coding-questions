/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

const list1 = new ListNode(1);

var swapPairs = function(head) {
    if (!head) {
        return head;
    }
    if (!head.next) {
        return head;
    }
    const originalHead = head.next;
    let prv = new ListNode();
    while(head && head.next) {
        prv.next = head.next;
        const tmp = prv.next.next;
        prv.next.next = head;
        head.next = tmp;
        head = prv.next.next.next;
        prv = prv.next.next;
    }
    return originalHead;
};

console.log(JSON.stringify(swapPairs(list1)));