/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(str, pattern) {
    let s = 0, p = 0, match = 0, starIdx = -1;            
    while (s < str.length) {
        // advancing both pointers
        if (p < pattern.length  && (pattern[p] == '?' || str[s] == pattern[p])){
            s++;
            p++;
        }
        // * found, only advancing pattern pointer
        else if (p < pattern.length && pattern[p] == '*'){
            starIdx = p;
            match = s;
            p++;
        }
       // last pattern pointer was *, advancing string pointer
        else if (starIdx != -1){
            p = starIdx + 1;
            match++;
            s = match;
        }
       //current pattern pointer is not star, last patter pointer was not *
      //characters do not match
        else return false;
    }
    
    //check for remaining characters in pattern
    while (p < pattern.length && pattern[p] == '*')
        p++;
    
    return p == pattern.length;
};

console.log(isMatch("aac", "a*c"));