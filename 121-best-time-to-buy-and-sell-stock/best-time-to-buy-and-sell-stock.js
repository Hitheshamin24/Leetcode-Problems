/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buying = prices[0], maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        buying = Math.min(buying, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - buying)
    }
    return maxProfit
};