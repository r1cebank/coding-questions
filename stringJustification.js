/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const ans = [];
    let tempWords = [];
    let tempLength = -1;
    for (let i = 0; i < words.length; i++) {
        if (tempLength < maxWidth) {
            if (tempLength + (1 + words[i].length) <= maxWidth) {
                tempWords.push(words[i]);
                tempLength += (1 + words[i].length);
            } else {
                const strLength = tempLength - (tempWords.length - 1);
                let finalString = '';
                if (tempWords.length > 1) {
                    finalString = pad(tempWords, strLength, maxWidth);
                } else {
                    let space = '';
                    for (let j = 0; j < maxWidth - tempLength; j++) { space = space + ' '; }
                    finalString = tempWords[0] + space;
                }
                ans.push(finalString);
                tempWords = [];
                tempLength = -1;
                i--;
            }
        } else {
            const strLength = tempLength - (tempWords.length - 1);
            let finalString = '';
            if (tempWords.length > 1) {
                finalString = pad(tempWords, strLength, maxWidth);
            } else {
                let space = '';
                for (let j = 0; j < maxWidth - tempLength; j++) { space = space + ' '; }
                finalString = tempWords[0] + space;
            }
            ans.push(finalString);
            tempWords = [];
            tempLength = -1;
            i--;
        }
    }
    if (tempWords.length) {
        const strLength = tempLength - (tempWords.length - 1);
        let finalString = '';
        if (tempWords.length > 1) {
            let space = '';
            for (let j = 0; j < maxWidth - tempWords.join(' ').length; j++) { space = space + ' '; }
            finalString = tempWords.join(' ') + space;
        } else {
            let space = '';
            for (let j = 0; j < maxWidth - tempLength; j++) { space = space + ' '; }
            finalString = tempWords[0] + space;
        }
        ans.push(finalString);
    }
    return ans;
};

function pad (str, initialLength, length) {
    let final = str[0];
    let assignment = new Array(str.length - 1).fill(0);
    let finalLength = initialLength;
    let initial = 0;
    while(finalLength < length) {
        if (finalLength < length) {
            assignment[initial] = assignment[initial] + 1;
            initial++;
            if (initial > str.length - 2) {
                initial = 0;
            }
            finalLength = initialLength + assignment.reduce((prev, curr) => { return prev + curr;}, 0);
        }
    }
    for (let i = 0; i < assignment.length; i++) {
        let space = '';
        for (let j = 0; j < assignment[i]; j++) { space = space + ' '; }
        final = final  + space + str[i + 1];
    }
    return final;
}
console.log(fullJustify(["Here","is","an","example","of","text","justification."], 14));
