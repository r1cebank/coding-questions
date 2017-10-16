class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    get size() {
        return this.stack.length;
    }
}

module.exports = Stack;