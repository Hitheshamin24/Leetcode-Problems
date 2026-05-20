/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let map = new Map();
    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i])
    }
    heights.sort((a,b)=>a-b);
  
    let ans = []
    for (let i = heights.length - 1; i >= 0; i--) {
        ans.push(map.get(heights[i]))
    }
    return ans;

};