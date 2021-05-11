const numbers = [1, 3, 5];
const endResult = 6;

const dp = [];

function solve(endResult) {
    // base case
    if (endResult < 0)
        return 0;
    if (endResult == 0)
        return 1;

    if (dp[endResult] !== undefined) {
        return dp[endResult];
    }

    dp[endResult] = numbers.map((n) => solve(endResult - n)).reduce((p, c) => p + c);

    return dp[endResult];
}

console.log(solve(endResult));
console.log(dp);