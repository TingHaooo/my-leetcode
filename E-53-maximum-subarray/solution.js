/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];
  max = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(dp[i], max);
  }
  console.log(dp);

  return max;
};

console.log(maxSubArray([1])); // 1
console.log(maxSubArray([1, -3, 10, 20])); // 30
console.log(maxSubArray([1, -3, 10, -20])); // 10
