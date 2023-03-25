/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let curMax = nums[0];
  let prevMax = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] + prevMax > curMax) {
      let tem = curMax;
      curMax = nums[i] + prevMax;
      prevMax = tem;
    } else {
      prevMax = curMax;
    }
  }

  return curMax;
};

console.log(rob([100, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 1, 3])); // 14
