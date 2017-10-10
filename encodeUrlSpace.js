function replace(startString) {
    let stringCopy = '';
    for (let i = 0; i < startString.length; i++) {
        if (startString[i] === ' ') {
            stringCopy += '%20';
        } else {
            stringCopy += startString[i];
        }   
    }
    return stringCopy;
}

module.exports = replace;

console.log(replace('this is a example'));