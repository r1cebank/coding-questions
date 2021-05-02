/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.liveKeys = [];
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.liveKeys.includes(key)) {
        const currentKeyIndex = this.liveKeys.indexOf(key);
        this.liveKeys.splice(currentKeyIndex, 1);
        this.liveKeys.unshift(key);
        return this.cache.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.cache.set(key, value);
    if (this.liveKeys.includes(key)) {
        this.get(key);
    } else {
        this.liveKeys.unshift(key);
    }
    if (this.liveKeys.length > this.capacity) {
        const evictKey = this.liveKeys.pop();
        this.cache.delete(evictKey);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */