/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let max = nums[0]
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
        if (nums[i] < min) min = nums[i]
    }
    var gcd = function (a, b) {
        if (b == 0) return a;
        return gcd(b, a % b)
    }
   return  gcd(max, min)
};