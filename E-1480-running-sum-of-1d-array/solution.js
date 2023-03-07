/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = nums[i] + dp[i - 1];
  }
  return dp;
};
