/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n=x;
    if(n<0){
       n= -n;
    }
    let rev=0;
    while(n>0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    if(x<0){
       rev= -rev;
    }
    if(rev < -(2 ** 31 )|| rev > (2 ** 31-1)){
        return 0;
    }
    return rev;
};