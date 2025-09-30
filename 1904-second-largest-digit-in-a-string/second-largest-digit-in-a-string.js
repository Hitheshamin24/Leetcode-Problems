/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let digits=s.match(/[0-9]/g)?.map(Number) || [];
    
    let largest=digits[0];
    let secondLargest=-1;
    for(let i=0;i<digits.length;i++){
        if(largest<digits[i])
        {
            secondLargest=largest
            largest=digits[i]
        }
        else if(largest > digits[i] && secondLargest < digits[i] ){
            secondLargest=digits[i];
        }
    }
    return secondLargest;
};