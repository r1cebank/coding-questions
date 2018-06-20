function compress(str) {
    if (str.length < 2) { return str; }
    let newStr = '';
    let curr = str.charAt(0);
    let counter = 1;
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) !== curr) {
            newStr = newStr + curr + counter.toString();
            curr = str.charAt(i);
            counter = 1;
        } else {
            counter++;
        }
    }
    newStr = newStr + curr + counter.toString();
    if (newStr.length > str.length) {
        return str;
    }
    return newStr;
}

console.log(compress('abca'));
