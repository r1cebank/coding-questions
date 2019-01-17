function arrayProduct(nums) {
    return nums.map((num, i) => {
        return nums.filter((n) => n != num).reduce((prev, curr) => prev * curr, 1);
    });
};

console.log(arrayProduct([3, 2, 1]))
