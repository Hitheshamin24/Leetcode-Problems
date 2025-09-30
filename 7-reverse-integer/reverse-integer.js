/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n=Math.abs(x);
  
    let result=0;
    while(n>0){
        let rem=n%10;
        result=result*10+rem;
        n=Math.floor(n/10);
    }
    if(x<0){
       result= -result;
    }
    if(result < -(2 ** 31 )|| result > (2 ** 31-1)){
        return 0;
    }
    return result;
};