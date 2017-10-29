/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a n + 2 size array, to store before and after
    const rollingArray = [];
    const originalHead = head;
    while(head) {
        rollingArray.push(head);
        head = head.next;
    }
    if (rollingArray.length === n) {
        return originalHead.next;
    }
    // Remove nth item
    rollingArray[rollingArray.length - n - 1].next = rollingArray[rollingArray.length - n].next;
    return originalHead;
};