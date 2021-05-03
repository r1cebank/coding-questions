/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */

var peek = function (stack) {
    return stack.length ? stack[stack.length - 1] : undefined;
}
var minCost = function (s, cost) {
    const prevStack = [];
    let totalCost = 0;
    for (let i = 0; i < s.length; i++) {
        const topItem = peek(prevStack);
        const currentChar = s.charAt(i);
        if (topItem && topItem[0] === currentChar) {
            // Determine cheapest and pop
            // If last item is cheap to remove
            if (topItem[1] < cost[i]) {
                const removedItem = prevStack.pop();
                totalCost += removedItem[1];
                prevStack.push([currentChar, cost[i]]);
            } else {
                // Ignore this item and add current cost
                totalCost += cost[i];
            }
        } else {
            prevStack.push([currentChar, cost[i]]);
        }
    }

    return totalCost;
};