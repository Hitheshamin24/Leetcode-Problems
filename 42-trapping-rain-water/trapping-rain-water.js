/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1, leftMax = rightMax = 0, total = 0
    while (left < right) {
        leftMax = Math.max(height[left], leftMax)
        rightMax = Math.max(height[right], rightMax)

        if (leftMax < rightMax) total += Math.min(leftMax, rightMax) - height[left++]
        else total += Math.min(leftMax, rightMax) - height[right--]

    }
    return total
};