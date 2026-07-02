/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0, buying = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buying) {
            buying = prices[i]
        }
        let profit = prices[i] - buying
        if (maxProfit < profit) {
            maxProfit = profit
        }
    }
    return maxProfit
};