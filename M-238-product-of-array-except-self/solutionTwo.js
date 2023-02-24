/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = [];
  ans[0] = 1;
  // calc left
  for (let i = 1; i < nums.length; ++i) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }

  // calc right
  right = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    ans[i] *= right;
    right *= nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
