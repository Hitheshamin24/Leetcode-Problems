/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    if (k > n) return -1
    let left = []
    let right = []
    let factors = []
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            console.log(i)
            left.push(i)
            if (i != n / i) right.push(n / i)
        }


    }
    right.reverse();

    factors = [...left, ...right]
   
    return factors[k - 1] !== undefined ? factors[k - 1] : -1
};