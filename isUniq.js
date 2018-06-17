function isUnique (str) {
    const count = {};
    for (let i = 0; i < str.length; i++) {
        if (count[str.charAt(i)]) {
            return false;
        }
        count[str.charAt(i)] = true;
    }
    return true;
}

console.log(isUnique('sas'))
