/**
 * @param {string} code
 * @return {boolean}
 */

const openingTag = /^(<([A-Z]{1,9})>)/;
const closingTag = /(<\/([A-Z]{1,9})>)$/;
const cData = /(<!\[CDATA\[.*?\]\]>)/g;

const openTagRegex = /(<([A-Z]{1,9})>)/g;
const closeTagRegex = /(<\/([A-Z]{1,9})>)/g;


var isContentValid = function (code) {
    if (code.length < 1) {
        return true;
    }


    // If code has unmatched <
    // Remove CDATA if they are valid, no use;
    code = code.replace(cData, '');
    const newCode = code.replace(openTagRegex, '').replace(closeTagRegex, '');

    console.log(newCode);

    if (newCode.includes('<')) {
        return false;
    }


    // [tagname, index, is_closing]
    const tags = [];

    while ((match = openTagRegex.exec(code))) {
        tags.push([match[2], match.index, false]);
    }
    while ((match = closeTagRegex.exec(code))) {
        tags.push([match[2], match.index, true]);
    }

    tags.sort((a, b) => a[1] - b[1]);
    console.log(tags);

    // Loop through tags and check balancing
    const stack = [];

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (!tag[2]) {
            // Opening tag gets pushed to stack
            stack.push(tag[0]);
        } else {
            // Closing tags pop stack until reached matching tag
            if (stack.length) {
                const topTag = stack.pop();
                if (topTag !== tag[0]) {
                    return false;
                }
            } else {
                // Empty opening stack, not balanced
                return false;
            }
        }
    }

    return stack.length ? false : true;
}
var isValid = function (code) {
    const openingMatch = openingTag.exec(code);
    const closingMatch = closingTag.exec(code);
    if (!openingMatch || !closingMatch) {
        return false;
    }
    if (openingMatch[2] === closingMatch[2]) {
        const tagContent = code.replace(openingTag, '').replace(closingTag, '');
        console.log(tagContent);
        return isContentValid(tagContent);
    }
    return false;
};