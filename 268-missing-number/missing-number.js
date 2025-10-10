/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sumArray1 = 0, sumArray2 = 0;
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        sumArray1 += nums[i];
    }
    for (let i = min; i <= nums.length; i++) {
        sumArray2 += i;
    }
    return Math.abs(sumArray1 - sumArray2)
};