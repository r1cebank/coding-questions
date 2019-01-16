function hasSum(numbers, sum) {
    const complement = [];
    for (let num of numbers) {
        const comp = sum - num;
        if (complement[comp]) {
            return true;
        } else {
            complement[num] = true;
        }
    }
    return false;
}

console.log(hasSum([10, 15, 3, 7], 17));
