/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
  }

  let pivot = -1;
  let leftSum = 0;
  let rightSum = sum - nums[0];

  let left = 0;
  while (left < nums.length) {
    if (leftSum === rightSum) {
      pivot = left;
      return pivot;
    }
    left++;
    leftSum += nums[left - 1];
    rightSum -= nums[left];
  }

  return pivot;
};
