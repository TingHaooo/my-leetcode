/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = [];
  let productAll = 1;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      zeroCount++;
      continue;
    }
    productAll = productAll * nums[i];
  }
  for (let i = 0; i < nums.length; ++i) {
    if (zeroCount > 1) {
      ans[i] = 0;
      continue;
    }
    if (!zeroCount) {
      ans[i] = productAll / nums[i];
    } else if (nums[i] === 0) {
      ans[i] = productAll;
    } else {
      ans[i] = 0;
    }
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
