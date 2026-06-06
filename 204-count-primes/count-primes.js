/**
 * @param {number} n
 * @return {number}
 */
var primeArray = function (n) {
    let arr = new Array(n + 1).fill(true);
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false
            }
        }
    }
    return arr
}
var countPrimes = function (n) {

    let arr = primeArray(n)
    let count = 0
    for (let i = 2; i < arr.length - 1; i++) {
        if (arr[i]) count++
    }
    return count

};