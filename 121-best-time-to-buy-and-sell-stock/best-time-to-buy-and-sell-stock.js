/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let maxProfit =0;
    let min = arr[0];

    for(let i=1;i<arr.length;i++){
        maxProfit = Math.max(maxProfit, (arr[i]-min));
        if(arr[i] < min){ min = arr[i]}
    }
    return maxProfit;
};