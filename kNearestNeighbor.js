function maxHeapLite(k) {
    this.heap = [undefined];
}

maxHeapLite.prototype.getMax = function () {
    return this.heap[1];
}

maxHeapLite.prototype.insert = function (v) {
    this.heap.push(v);
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 1) {
        const parent = parseInt(currentIndex / 2) || 0;
        if (this.heap[currentIndex]) {
            if (this.heap[currentIndex].distance > this.heap[parent].distance) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[parent];
                this.heap[parent] = temp;
            }
        }
        currentIndex = parent;
    }
}

maxHeapLite.prototype.replace = function (v) {
    this.heap[1] = v;
    let currentIndex = 1;
    while (currentIndex * 2 < this.heap.length) {
        if (this.heap[currentIndex]) {
            if (this.heap[currentIndex + 1].distance > this.heap[currentIndex + 2].distance) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[currentIndex + 2];
                this.heap[currentIndex + 2] = temp;
            } else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[currentIndex + 1];
                this.heap[currentIndex + 1] = temp;
            }
        }
        currentIndex++;
    }
}

maxHeapLite.prototype.getValue = function () {
    return this.heap.slice(1);
}

function kNear(points, k) {
    if (points.length <= k) {
        return points;
    }
    const distances = points.map((m, i) => {
        return {
            distance: Math.sqrt(Math.pow(m[0], 2) + Math.pow(m[1], 2)),
            point: m
        };
    });
    const heap = new maxHeapLite();
    for (let i = 0; i < points.length; i++) {
        if (i < k) {
            heap.insert(distances[i]);
        } else {
            if (heap.getMax().distance > distances[i].distance) {
                heap.replace(distances[i]);
            }
        }
    }
    return heap.getValue().map((v) => v.point);
}

const points = [
    [0, -2],
    [-2, 4],
    [-1, 0],
    [3, 5],
    [-2, -3],
    [3, 2]
];

console.log(kNear(points, 3));
