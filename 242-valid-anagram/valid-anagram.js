/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false

    let charMap={}
    for(let char of s ){
        charMap[char]=(charMap[char]||0)+1
    }
    for(let char of t)
    {
        if(!charMap[char]) return false
        charMap[char]--
    }
    return true
};