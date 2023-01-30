/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; ++i) {
    for (let k = i + 1; k < prices.length; ++k) {
      if (prices[k] - prices[i] > 0) {
        maxProfit = Math.max(maxProfit, prices[k] - prices[i]);
      }
    }
  }

  return maxProfit;
};

// O(n2)
