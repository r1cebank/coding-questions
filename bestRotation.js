/**
 * @param {number[]} A
 * @return {number}
 */
var bestRotation = function (A) {
    let score = 0;
    const intervals = new Array(A.length).fill(0);
    for(let i = 0; i < A.length; i++) {
        const num = A[i];
        if(num <= i) {
            score++;
        }
        const left = (i - num + 1 + A.length) % A.length;
        const right = (i + 1) % A.length;
        intervals[left]--;
        intervals[right]++;

        if (left > right) {
            intervals[0]--;
        }
    }

    let k = 0;
    let max_score = score;
    for (let i = 1; i < A.length; i++) {
        score += intervals[i];
        if(score > max_score) {
            max_score = score;
            k = i;
        }
    }
    return k;
};

console.log(bestRotation([2,4,1,3,0]));
