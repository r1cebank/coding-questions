const Stack = require('./stack');

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    enqueue(item) {
        this.s1.push(item);
    }
    dequeue() {
        if (this.s2.size) {
            return this.s2.pop();
        } else {
            while(this.s1.size) {
                this.s2.push(this.s1.pop());
            }
            return this.s2.pop();
        }
    }
    get size() {
        return this.s1.size + this.s2.size;
    }
}


// const q1 = new Queue();

// q1.enqueue(1);
// q1.enqueue(2);
// q1.enqueue(3);

// console.log(q1.dequeue());

// q1.enqueue(4);

// console.log(q1.dequeue());
// console.log(q1.dequeue());
// console.log(q1.dequeue());


module.exports = Queue;