/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.min = Number.MAX_SAFE_INTEGER;
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push([val, this.min]);
    if (val < this.min) {
        this.min = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const popped = this.stack.pop();
    this.min = popped[1];
    return popped[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */