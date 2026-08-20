/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0, left = 0, right = height.length - 1
    while (left < right) {
        let len = Math.min(height[left], height[right])
        let breadth = right - left
        let area = len * breadth
        maxArea = Math.max(area, maxArea)
        if (height[left] < height[right]) left++
        else right--
    }
    return maxArea
};