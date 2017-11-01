/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}
const list1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(7))));

 var reverseKGroup = function(head, k) {
    var cur = head;
    var pre = null;
    var post = null;
    var count = 0;
    
    while(cur !== null && count < k) {
        cur = cur.next;
        count++;   
    }
    
    if(count !== k) {
        return head;
    }
    
    cur = head;

    while(cur !== null && count > 0) {
        post = cur.next;
        cur.next = pre;
        pre = cur;
        cur = post;
        count--;
    }
    
    // post is now a pointer to (k+1)th node
    // recursively call for the list starting from cur
    if(post !== null) {
        head.next = reverseKGroup(post, k);
    }
    
    return pre;
};

console.log(JSON.stringify(reverseKGroup(list1, 2)));