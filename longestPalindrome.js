function longest(input) {
    const pa = [];
    let start = 0;
    let longest = 0;
    for(let i = 0; i < input.length; i++) {
        pa[i] = Array(input.length).fill(undefined);
        pa[i][i] = true;
        longest = 1;
    }
    for(let i = 0; i < input.length - 1; i++) {
        if (input[i] === input[i + 1]) {
            pa[i][i + 1] = true;
            longest = 2;
            start = i;
        } else {
            pa[i][i + 1] = false;
        }
    }
    for (let cur = 3; cur <= input.length; cur++) {
        for(let i = 0; i < input.length - cur + 1; i++) {
            const j = i + cur - 1;
            if (input[i] === input[j] && pa[i + 1][j - 1]) {
                pa[i][j] = true;
                longest = cur;
                start = i;
            }
        }
    }
    return input.slice(start, start + longest);
}

console.log(longest('ccc'));