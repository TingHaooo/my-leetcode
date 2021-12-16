/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minP = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; ++i) {
    minP = Math.min(prices[i], minP);
    profit = prices[i] - minP;
    maxProfit = Math.max(profit, maxProfit);
  }

  return maxProfit;
};

// O(n)
console.log(maxProfit([1, 2, 3, 4, 5, 6])); // 5
console.log(maxProfit([2, 1, 5, 4, 5, 10])); // 9
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
