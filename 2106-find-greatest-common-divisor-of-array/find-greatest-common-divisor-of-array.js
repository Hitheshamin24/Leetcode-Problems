/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    const max=Math.max(...nums)
    const min=Math.min(...nums)
    var gcd = (a, b) => b == 0 ? a : gcd(b, a % b)
    return gcd(max, min)
};