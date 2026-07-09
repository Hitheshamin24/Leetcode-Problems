/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let mArea = 0
    let i = 0, j = height.length - 1
    while (i < j) {
        let l = Math.min(height[i], height[j])
        let b = j - i
        let area = l * b
        mArea = Math.max(mArea, area)
        if (height[i] < height[j]) i++
        else j--
    }
    return mArea

};