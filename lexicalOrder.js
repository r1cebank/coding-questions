/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    const answer = [];
    let curr = 1;
    for (let i = 0; i < n; i++) {
        answer.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else if (curr % 10 !== 9 && curr + 1 <= n) {
            curr++;
        } else {
            while (parseInt(curr / 10) % 10 == 9) {
                curr = parseInt(curr / 10);
            }
            curr = parseInt(curr / 10) + 1;
        }
    }
    return answer;
};


console.log(lexicalOrder(12))
