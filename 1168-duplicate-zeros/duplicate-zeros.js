/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var countZero = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count++
    }
    return count
}
var duplicateZeros = function (arr) {
    let i = arr.length - 1
    let j = arr.length - 1 + countZero(arr)
    while (i >= 0) {
        if (j < arr.length) {
            arr[j] = arr[i]
        }
        j--
        if (arr[i] === 0) {
            if (j < arr.length) arr[j] = 0
            j--
        }
        i--

    }
    
};