/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let count = 0;
    let tempNum = num
    while (tempNum > 0) {
        let digit = tempNum % 10;
        if (digit != 0 && num % digit == 0) {
            count++;
        }
        tempNum = Math.floor(tempNum / 10)
    }
    return count;

};