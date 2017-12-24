/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word1 === word2) { return 0; }
    if (word1.length === 0 || word2.length === 0) {
        return Math.abs(word1.length - word2.length);
    }
    const dp = [];
    for (let i = 0; i <= word1.length; i++) {
        dp.push(new Array());
    }
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = 0 + i;
    }
    for (let i = 0; i <= word2.length; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1])) + 1;
            }
        }
    }
    return dp[word1.length][word2.length];
};

console.log(minDistance('word1', 'w0rd2'));
