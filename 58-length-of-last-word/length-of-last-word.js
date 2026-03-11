/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0;
    while (n > 0 && s.charAt(n) === ' ') {
        n--
    }
    while (n >= 0 && s.charAt(n) !== ' ') {
        count++; n--;
    }
    return count;
};