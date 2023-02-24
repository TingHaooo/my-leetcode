/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let right = 1;
  // lowest point index
  let left = 0;
  let maxProfit = 0;

  while (right < prices.length) {
    let curProfit = prices[right] - prices[left];
    if (curProfit > 0) {
      maxProfit = Math.max(curProfit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};

// O(n)
console.log(maxProfit([1, 2, 3, 4, 5, 6])); // 5
console.log(maxProfit([2, 1, 5, 4, 5, 10])); // 9
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
