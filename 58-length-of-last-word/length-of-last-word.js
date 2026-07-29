/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word=s.trim().split(" ").reverse()
    return word[0].length
};