/**
 * Definition for singly-linked list.

 */
// function ListNode(val,next) {
//     this.val = val;
//     this.next = next;
// }
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Finding length first
    let d = head;
    let length = 1;
    while (d.next) {
        d = d.next;
        length++;
    }
    const rotate = k % length;
    if (rotate === 0) { return head; }
    // Find the cutoff
    let cutoff = head;
    for (let i = 0; i < length - rotate - 1; i++) { cutoff = cutoff.next; }
    // Find new head
    let newHead = head;
    for (let i = 0; i < length - rotate; i++) { newHead = newHead.next; }
    d.next = head;
    cutoff.next = null;
    return newHead;
};

console.log(JSON.stringify(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)));

