/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let currentSum = 0;
    const prefixSums = new Map();
    prefixSums.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (prefixSums.has(currentSum - k)) {
            count += prefixSums.get(currentSum - k);
        }
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
    }
    return count;
};