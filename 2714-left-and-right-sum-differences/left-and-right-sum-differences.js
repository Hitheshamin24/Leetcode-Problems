/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let lSum = rSum = 0;
    let leftSum = []
    rightSum = [];
    for (let i = 0; i < nums.length; i++) {
        leftSum[i] = lSum
        rightSum[nums.length - 1 - i] = rSum
        lSum += nums[i]
        rSum += nums[nums.length - 1 - i]
    }
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i])
    }
    return answer
};