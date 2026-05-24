/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let map = new Map();
    let duplicate
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) duplicate = nums[i];
        else map.set(nums[i], 1)
    }
    let missing;
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            missing = i;
        }
    }


    return [duplicate, missing]
};