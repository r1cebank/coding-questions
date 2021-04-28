/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const visited = Array(s.length).fill(false)
    const queue = [0];

    while (queue.length) {
        const start = queue.shift();
        if (visited[start]) continue;

        for (let end = start + 1; end <= s.length; end++) {
            if (!wordSet.has(s.slice(start, end))) continue;
            if (end === s.length) return true;
            queue.push(end);
        }
        visited[start] = true;
    }
    return false;
};