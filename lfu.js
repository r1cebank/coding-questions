/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.t = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    this.t++;
    const currentItem = this.cache.get(key);
    if (!currentItem) {
        return -1;
    }

    this.cache.set(key, [currentItem[0], this.t, currentItem[2] + 1]);

    return currentItem[0];
};

LFUCache.prototype.evictNextKey = function () {
    let leastUsed = Number.MAX_SAFE_INTEGER;
    const keyCounters = [];
    // console.log(this.cache);
    for (let key of this.cache.keys()) {
        const item = this.cache.get(key);
        const keyCounter = item[2];
        const timeStamp = item[1];
        if (keyCounter < leastUsed) {
            leastUsed = keyCounter;
        }
        if (!keyCounters[keyCounter]) {
            keyCounters[keyCounter] = [];
        }

        keyCounters[keyCounter].push([key, timeStamp]);
    };

    // console.log(keyCounters);
    for (let i = 0; i < keyCounters.length; i++) {
        if (keyCounters[i] && keyCounters[i].length) {
            const keyCounter = keyCounters[i];
            keyCounter.sort((a, b) => a[1] - b[1]);

            const keyToBeEvicted = keyCounter[0][0];
            // console.log(`deleting ${keyToBeEvicted}`);
            this.cache.delete(keyToBeEvicted);
            break;
        }
    }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    this.t++;
    if (this.capacity === 0) {
        return;
    }
    const currentItem = this.cache.get(key);
    if (!currentItem) {
        // Run the key eviction if close to limit
        if (this.cache.size === this.capacity) {
            this.evictNextKey();
        }
        this.cache.set(key, [value, this.t, 1]);
    } else {
        this.cache.set(key, [value, this.t, currentItem[2] + 1]);
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */