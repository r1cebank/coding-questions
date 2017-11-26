/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let pos = 0;
    let numbers = [];
    let factorial = [];
    let sb = '';
    // create an array of factorial lookup
    let sum = 1;
    factorial[0] = 1;
    for(let i=1; i<=n; i++){
        sum *= i;
        factorial[i] = sum;
    }
    // factorial[] = {1, 1, 2, 6, 24, ... n!}
    // create a list of numbers to get indices
    for(let i=1; i<=n; i++){
        numbers.push(i);
    }
    // numbers = {1, 2, 3, 4}
    k--;

    for(let i = 1; i <= n; i++){
        let index = parseInt(k/factorial[n-i]);
        sb = sb + numbers[index].toString();
        numbers.splice(index, 1);
        k-=index*factorial[n-i];
    }

    return sb;
};

console.log(getPermutation(3, 2));
