const values = [10, 15, 40];
const weights = [1, 2, 3];
const maxWeight = 6;

const dp = new Array(values.length + 1).fill([]);

function getWeight(current, weight) {
    if (current === 0) {
        return 0;
    }
    if (weight < 0) {
        return 0;
    }

    if (dp[current][weight]) {
        console.log('already calculated');
        return dp[current][weight];
    }

    // console.log(current, weight);

    if (weights[current - 1] > weight) {
        return getWeight(current - 1, weight);
    }

    const withCurrent = values[current - 1] + getWeight(current - 1, weight - weights[current - 1]);
    const withoutCurrent = getWeight(current - 1, weight);

    // console.log(withCurrent, withoutCurrent);
    dp[current][weight] = Math.max(withCurrent, withoutCurrent);

    return dp[current][weight];
}

function getMaxValueFitted(values, weights, maxWeight) {
    const state = new Array(values.length + 1);

    for (let i = 0; i <= values.length; i++) {
        state[i] = [];
        for (let w = 0; w <= maxWeight; w++) {
            if (i === 0 || w === 0) {
                state[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                state[i][w] = Math.max(values[i - 1] + state[i - 1][w - weights[i - 1]], state[i - 1][w]);
            } else {
                state[i][w] = state[i - 1][w];
            }
        }
    }
    console.log(state);
    return state[values.length][maxWeight];
}

console.log(getMaxValueFitted(values, weights, maxWeight));

// console.log(dp);