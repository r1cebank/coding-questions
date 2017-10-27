/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const answer = [];
    const dict = [
        ['0'],
        ['1'],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]
    if (digits.length === 0) {
        return [];
    }
    if (digits.length === 1) {
        return dict[parseInt(digits)];
    }
    function dfs(digits, idx, curr) {
        if(idx === digits.length) {
            answer.push(curr);
            return;
        }
        
        var letters = dict[digits[idx]];
        
        for(var i = 0; i < letters.length; i++) {
            dfs(digits, idx + 1, curr + letters[i]);
        }
    }
    
    dfs(digits, 0, '');
    return answer;
}