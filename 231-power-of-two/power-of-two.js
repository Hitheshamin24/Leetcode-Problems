/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if((n<-(2**31)) ||(n>2**31 - 1)){
        return -1;
    }
    for(let i=0;2**i<=n;i++){
        if(2**i==n){
            return true
        }
    }
    return false
};