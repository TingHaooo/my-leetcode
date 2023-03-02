/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prevSum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    prevSum = nums[i] + (prevSum > 0 ? prevSum : 0);
    max = Math.max(prevSum, max);
  }

  return max;
};

console.log(maxSubArray([1])); // 1
console.log(maxSubArray([1, -3, 10, 20])); // 30
console.log(maxSubArray([1, -3, 10, -20])); // 10
