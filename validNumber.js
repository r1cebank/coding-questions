/**
 * @param {string} s
 * @return {boolean}
 */
// var isNumber = function(s) {
//     const allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'e', '-', '+'];
//     const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     const trimmed = s.trim();
//     let decimal = false;
//     let exponential = false;
//     if (trimmed.length < 1) { return false; }
//     for (let i = 0; i < trimmed.length; i++) {
//         if (allowed.includes(trimmed[i])) {
//             if (trimmed[i] === '+' && i !== 0) { return false; }
//             if (trimmed[i] === '-' && i !== 0) { return false; }
//             if (trimmed[i] === 'e') {
//                 if (i === 0) { return false; }
//                 if (i === trimmed.length - 1) { return false; }
//                 if (!numbers.includes(trimmed[i - 1])) { return false; }
//                 if (exponential) { return false; }
//                 exponential = true;
//             }
//             if (trimmed[i] === '.') {
//                 if (i === 0 && trimmed.length === 1) { return false; }
//                 if (trimmed[i - 1] === 'e') { return false; }
//                 if (!numbers.includes(trimmed[i + 1]) && !numbers.includes(trimmed[i - 1])) { return false; }
//                 // if (i === trimmed.length - 1) { return false; }
//                 if (decimal) { return false; }
//                 decimal = true;
//             }
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

var isNumber = function(s) {
    const state = [
        {},
        {'blank': 1, 'sign': 2, 'digit':3, '.':4},
        {'digit':3, '.':4},
        {'digit':3, '.':5, 'e':6, 'blank':9},
        {'digit':5},
        {'digit':5, 'e':6, 'blank':9},
        {'sign':7, 'digit':8},
        {'digit':8},
        {'digit':8, 'blank':9},
        {'blank':9}
    ];
    let currentState = 1;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c >= '0' && c <= '9') { c = 'digit'; }
        if (c === ' ') { c = 'blank'; }
        if (['+', '-'].includes(c)) { c = 'sign'; }
        if (!Object.keys(state[currentState]).includes(c)) {
            return false;
        }
        currentState = state[currentState][c];
    }
    if (![3, 5, 8, 9].includes(currentState)) {
        return false;
    }
    return true;
}

console.log(isNumber(' -1.0'));
