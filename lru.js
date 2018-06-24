function DList(prev, next, data) {
    this.prev = prev;
    this.next = next;
    this.data = data;
}

function LRU (maxSize) {
    this.maxSize = maxSize;
    this.data = {};
}

LRU.prototype.getLeastKey = function () {
    let root = this.mostUsed;
    if (!root) { return -1; }
    while(root.next) {
        root = root.next;
    }
    return root.data;
}

LRU.prototype.put = function (key, val) {
    const node = new DList(undefined, undefined, val);
    this.data[key] = node;
    if (Object.keys(this.data).length > this.maxSize) {
        // Delete least used
        const removeKey = this.getLeastKey();
        const node = this.data[removeKey];
        const next = node.next;
        const prev = node.prev;
        if (prev) {
            prev.next = node.next;
        }
        if (next) {
            next.prev = node.prev;
        }
        delete this.data[removeKey];
    } else {
        if (!this.mostUsed) {
            this.mostUsed = node;
        } else {
            node.next = this.mostUsed;
            this.mostUsed.prev = node;
            this.mostUsed = node;
        }
    }
}

LRU.prototype.get = function (key) {
    if (!this.data[key]) { return -1; }
    const node = this.data[key];
    // Shift node
    const next = node.next;
    const prev = node.prev;
    if (next) {
        next.prev = prev;
    }
    if (prev) {
        prev.next = next;
    }
    node.prev = undefined;
    node.next = this.mostUsed;
    this.mostUsed.prev = node;
    this.mostUsed = node;
    return node.data;
}


const cache = new LRU(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache);
