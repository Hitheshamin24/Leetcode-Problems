/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0)
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    let freq = 0, ans = -1;
    for (let key of map.keys()) {
        if (freq < map.get(key)) {
            freq = map.get(key);
            ans = key;
        } else if (freq == map.get(key)) ans = Math.min(ans, key)
    }
    return ans;
};