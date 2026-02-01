/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    let num = Math.abs(x)
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    }
    rev = (x < 0) ? -rev : rev;
    if (rev < -(2 ** 31) || rev > (2 ** 31)-1) {
        return 0
    }
    return rev
};