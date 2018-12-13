/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    return pickNumber(nums, 0, nums.length - 1, 0, 0, true);
};

function pickNumber(numbers, start, end, p1, p2, player1Pick) {
    if(start > end) {
        if (player1Pick) {
            if(p1 >= p2) { return true; }
            return false;
        } else {
            if(p1 < p2) { return true; }
            return false;
        }
    }
    if(player1Pick) {
        const l = pickNumber(numbers, start + 1, end, p1 + numbers[start], p2, false);
        const r = pickNumber(numbers, start, end - 1, p1 + numbers[end], p2, false);
        return !l || !r;
    } else {
        const l = pickNumber(numbers, start + 1, end, p1, p2 + numbers[start], true);
        const r = pickNumber(numbers, start, end - 1, p1, p2 + numbers[end], true);
        return !l || !r;

    }
}

console.log(PredictTheWinner([0]));
