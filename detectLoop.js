const Node = require('./node');

function detectLoop(list) {
    while(list != undefined) {
        if (list.visited) {
            return list.value;
        }
        list.visited = true;
        list = list.next;
    }
    return false;
}

const looped = new Node(3);
looped.next = new Node(5, new Node(7, looped));

const list = new Node(1, looped);

console.log(detectLoop(list));

module.exports = detectLoop;