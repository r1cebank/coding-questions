function matchPattern(input, pattern) {
    let patternIndex = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return true;
            }
            patternIndex++;
            continue;
        } else {
            i = i - patternIndex;
            patternIndex = 0;
        }
    }
    return false;
}

module.exports = matchPattern;

console.log(matchPattern('bababel', 'babel'));