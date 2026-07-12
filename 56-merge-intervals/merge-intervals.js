/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let ans = []
    for (let i = 0; i < intervals.length; i++) {
        let curr = intervals[i]
        let prev = ans[ans.length - 1]
        if (ans.length == 0 || curr[0] > prev[1]) ans.push(curr)
        else ans[ans.length - 1][1] = Math.max(curr[1], prev[1])
    }
    return ans
};