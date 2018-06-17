function isPermutatin(str1, str2) {
    if (str1.length !== str2.length) { return false; }
    const count = {};
    for (let i = 0; i < str1.length; i++) {
        if (count[str1.charAt(i)]) {
            count[str1.charAt(i)] = count[str1.charAt(i)] + 1;
        } else {
            count[str1.charAt(i)] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (!count[str2.charAt(i)]) {
            return false;
        }
        count[str2.charAt(i)] = count[str2.charAt(i)] - 1;
    }
    return true;
}

console.log(isPermutatin('saa', 'ssa'));
