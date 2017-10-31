/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

const list0 = new ListNode(-1);
const list1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(7))));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const INT_MAX = 2147483647;

var mergeKLists = function(lists) {
    let head = new ListNode();
    const originalHead = head;
    lists = lists.filter((list) => {
        return list;
    });
    while(lists.length > 0) {
        let min = INT_MAX;
        let minIndex = 0;
        lists.map((list, index) => {
            if (list.val < min) {
                min = list.val;
                minIndex = index;
            }
        });
        head.next = new ListNode(min);
        head = head.next;
        lists[minIndex] = lists[minIndex].next;
        if (!lists[minIndex]) {
            lists.splice(minIndex, 1);
        }
    }
    return originalHead.next;
};

console.log(JSON.stringify(mergeKLists([list0])));