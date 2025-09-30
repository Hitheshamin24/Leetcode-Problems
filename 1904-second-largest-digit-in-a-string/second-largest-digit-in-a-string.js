/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    
    
    let largest=-1;
    let secondLargest=-1;
    for(let i=0;i<s.length;i++){
        let code = s.charCodeAt(i)-48
        if(code >=0 && code <= 9 ){ 
        if(largest<code)
        {
            secondLargest=largest
            largest=code
        }
        else if(largest > code && secondLargest < code ){
            secondLargest=code;
        }
        }
    }
    return secondLargest;
};