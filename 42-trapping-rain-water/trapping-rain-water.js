/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let total = 0, right = height.length - 1, left = 0, leftMax = rightMax = 0
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (leftMax < rightMax) total += Math.min(leftMax, rightMax) - height[left++]
        else total += Math.min(leftMax, rightMax) - height[right--]
    }
    return total
};