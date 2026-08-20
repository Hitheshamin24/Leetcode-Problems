/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    let arr1 = [nums[0]]
    let arr2 = [nums[1]]
    let k = 1, j = 1;
    for (let i = 2; i < nums.length; i++) {
        if (arr1[j-1] > arr2[k-1]) {
            arr1[j++] = nums[i]
        } else arr2[k++] = nums[i]

    }
    return [...arr1,...arr2]
};