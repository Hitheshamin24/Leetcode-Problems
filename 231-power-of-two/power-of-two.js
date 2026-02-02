/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<0 ) return false;
    if(n==1) return true;
    for(let i=0;2**i<=n;i++){
        if(2**i==n){
            return true
        }
    }
    return false
};