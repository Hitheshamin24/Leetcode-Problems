/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let num = x,rev=0;
    while (num > 0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
    }
    if(rev==x){
        return true;
    }
    else{
        return false
        
    }
};