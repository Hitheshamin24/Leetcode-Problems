/**
 * @param {number[]} nums
 * @return {number}
 */

var maxLength = function(nums) {
    const n = nums.length;
    let ans = 0;

    const gcd = (a, b) => b ? gcd(b, a % b) : a;

    for (let l = 0; l < n; l++) {
        let g = nums[l], lc = nums[l];
        let inv = 1 / nums[l];

        for (let r = l; r < n; r++) {
            if (r > l) {
                g = gcd(g, nums[r]);
                lc = lc / gcd(lc, nums[r]) * nums[r];
                inv /= nums[r];
            }

            if (g * lc * inv > 0.99999999)
                ans = Math.max(ans, r - l + 1);
        }
    }

    return ans;
};