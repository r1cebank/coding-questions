const Queue = require('./queue2Stack');

class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push(item) {
        if (!this.q1.size && !this.q2.size) {
            this.q1.enqueue(item);
            return;
        }
        if (this.q1.size) {
            this.q1.enqueue(item);
        } else if (this.q2.size) {
            this.q2.enqueue(item);
        } else {
            throw new Error('Something is not right.');
        }
    }
    pop() {
        if (this.q1.size) {
            while (this.q1.size) {
                if (this.q1.size === 1) {
                    return this.q1.dequeue();
                } else {
                    this.q2.enqueue(this.q1.dequeue());
                }
            }
        } else if (this.q2.size) {
            while (this.q2.size) {
                if (this.q2.size === 1) {
                    return this.q2.dequeue();
                } else {
                    this.q1.enqueue(this.q2.dequeue());
                }
            }
        }
    }
}

const s1 = new Stack();

s1.push(1);
s1.push(2);
s1.push(3);

console.log(s1.pop());

s1.push(4);

console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());


module.export = Stack;