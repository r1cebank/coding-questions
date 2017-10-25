/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    if(s.indexOf("IV")!=-1){ sum -= 2; }
    if(s.indexOf("IX")!=-1){ sum -= 2; }
    if(s.indexOf("XL")!=-1){ sum -= 20; }
    if(s.indexOf("XC")!=-1){ sum -= 20; }
    if(s.indexOf("CD")!=-1){ sum -= 200; }
    if(s.indexOf("CM")!=-1){ sum -= 200; }

    let count=0;

    for(; count < s.length; count++){
        if(s[count] === 'M') sum += 1000;
        if(s[count] ==='D') sum += 500;
        if(s[count] === 'C') sum += 100;
        if(s[count] === 'L') sum += 50;
        if(s[count] === 'X') sum += 10;
        if(s[count] === 'V') sum += 5;
        if(s[count] === 'I') sum += 1;
    }

    return sum;
};

console.log(romanToInt('LXXXI'));