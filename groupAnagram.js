/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ans = {};
    for (const str of strs) {
        const sorted = sort(str);
        if (!ans[sorted]) {
            ans[sorted] = [];
        }
        ans[sorted].push(str);
    }
    return Object.values(ans);
};

var sort = function(text) {
    return text.split('').sort().join('');
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

