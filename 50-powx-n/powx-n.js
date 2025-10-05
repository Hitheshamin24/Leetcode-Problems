/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

    if (n == 0) return 1.0;
    if (x == 0) return 0;
    if (n == 1) return x;
    if (x == -1 && n % 2 != 0 ) return -1.0;
    if (x == -1 && n % 2 == 0 ) return 1.0;
    let binaryform = n;

    if (n < 0) {
        x = 1 / x;
        binaryform = -binaryform;
    }
    let ans = 1;
    while (binaryform > 0) {
        if (binaryform % 2 == 1) {
            ans *= x;
        }
        x *= x;
        binaryform = Math.floor(binaryform / 2);
    }
    return ans;
};