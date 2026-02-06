/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0;
    let bestBuy=prices[0];
    for(let i=0;i<prices.length;i++){
        if(prices[i]<bestBuy){
            bestBuy=prices[i]
        }
        let profit=prices[i]-bestBuy;
        if(maxProfit<profit) {
            maxProfit=profit
        }
    }
    return maxProfit
};