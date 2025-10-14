/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let bool = false
    if (num == 1) return true
    for (let i = 1; i <= num / 2; i++) {
        if (i * i == num) {
            bool = true
            return bool
        }
    }
    return bool
};