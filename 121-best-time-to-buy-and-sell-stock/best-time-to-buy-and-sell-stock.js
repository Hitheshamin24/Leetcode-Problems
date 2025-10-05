/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0;
    let bestBuy=prices[0];
    for(let i=1;i<prices.length;i++){
        bestBuy=Math.min(bestBuy,prices[i])
        if(prices[i]>bestBuy){
            maxProfit=Math.max(maxProfit,prices[i]-bestBuy)
        }
    }
    return maxProfit
};