/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }
    let distinctCount = 0;
    for (let key of map.keys()) {
        if (map.get(key) === 1) {
            distinctCount++;
            if (distinctCount === k) {
                return key;
            }
        }

    }
    return "";

};