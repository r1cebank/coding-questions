/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const fiveDict = {
        0: 'V',
        1: 'L',
        2: 'D'
    };
    const powerOfTenDict = {
        0: 'I',
        1: 'X',
        2: 'C',
        3: 'M'
    };
    let answer = '';
    let powerOfTen = 0;
    while(num > 0) {
        const part = num % 10;
        if (part === 1) {
            if (powerOfTen === 0) {
                answer = 'I' + answer;
            } else {
                answer = powerOfTenDict[powerOfTen] + answer;
            }
        } else if (part !== 1 && part < 4) {
            answer = powerOfTenDict[powerOfTen].repeat(part) + answer;
        } else if (part === 4) {
            answer = powerOfTenDict[powerOfTen] + fiveDict[powerOfTen] + answer;
        } else if(part === 5) {
            answer = fiveDict[powerOfTen] + answer;
        } else if (part > 5 && part < 9) {
            answer = fiveDict[powerOfTen] + powerOfTenDict[powerOfTen].repeat(part - 5) + answer;
        } else if (part === 9) {
            answer = powerOfTenDict[powerOfTen] + powerOfTenDict[powerOfTen + 1] + answer;
        }
        num = parseInt(num / 10);
        powerOfTen++;
    }
    return answer;
};

console.log(intToRoman(400));