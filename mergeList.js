const Node = require('./node');

const list1Head = new Node(1, new Node(3, new Node(5, new Node(7))));
const list2Head = new Node(2, new Node(4, new Node(6, new Node(8))));

function mergeList(list1, list2) {
    let mergedList = new Node();
    const mergedListHead = mergedList;
    while(list1 !== undefined || list2 !== undefined) {
        if (list1 === undefined) {
            mergedList.next = new Node(list2.value);
            mergedList = mergedList.next;
            list2 = list2.next;
            continue;
        }
        if (list2 === undefined) {
            mergedList.next = new Node(list1.value);
            mergedList = mergedList.next;
            list1 = list1.next;
            continue;
        }
        if (list1.value < list2.value) {
            mergedList.next = new Node(list1.value);
            mergedList = mergedList.next;
            list1 = list1.next;
        } else {
            mergedList.next = new Node(list2.value);
            mergedList = mergedList.next;
            list2 = list2.next;
        }
    }
    return mergedListHead.next;
}

console.log(JSON.stringify(mergeList(list1Head, list2Head)));


module.export = mergeList;