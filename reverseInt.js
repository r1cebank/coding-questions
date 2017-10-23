const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

function reverse(input) {
    let final = 0;
    const positive = (input > 0) ? true : false;
    if (!positive) {
        input = -input; // Reverse sign, easier to calculate
    }
    if (input < 10) {
        return input;
    }
    if (input % 10 === 0) {
        return positive ? reverse(input / 10) : -reverse(input / 10);
    }
    while(input > 0) {
        final *= 10;
        final += input % 10;
        if (final > INT_MAX || final < INT_MIN) {
            return 0;
        }
        input = parseInt(input / 10);
    }
    return ((final > INT_MAX) || (final < INT_MIN)) ? 0 : (positive ? final : -final);
}


console.log(reverse(-10));
