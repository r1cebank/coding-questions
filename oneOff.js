function oneOff(s1, s2) {
    let index = 0;
    let found = false;
    let maxSize = (s1.length > s2.length) ? s1.length : s2.length;
    for (let i = 0; i < maxSize; i++) {
        if (s1.charAt(index) === s2.charAt(i)) {
            index++;
        } else {
            if (found) {
                return false;
            } else {
                if (s1.length > s2.length) {
                    i--;
                    index++;
                } else if (s1.length < s2.length) {
                    index--;
                } else {
                    index++;
                }
                found++;
            }
        }
    }
    return true;
}

console.log(oneOff('pale', 'bake'));

// Detect if one string is one modification away from another
