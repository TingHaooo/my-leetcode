/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let dp = [nums[0] ? 0 : 1];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i]) {
      dp[i] = 0;
      continue;
    }

    dp[i] = dp[i - 1] + 1;
  }

  return dp.reduce((acc, cur) => acc + cur, 0);
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])); // 6
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0])); // 9
