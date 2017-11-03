/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
    const q = [];
    let maxCount = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            q.push(i);
        } else {
            if (q.length > 0 && s[q[q.length - 1]] === '(') {
                q.pop();
                let lastPos = -1;
                if (q.length) {
                    lastPos = q[q.length - 1];
                }
                const length = i - lastPos;
                maxCount = maxCount > length ? maxCount : length;
            } else {
                q.push(i);
            }
        }
    }
    return maxCount;
};

console.log(longestValidParentheses("()(()"));