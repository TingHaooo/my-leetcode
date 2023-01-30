/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let m = nums[0];
  for (let i = 0; i < nums.length; ++i) {
    if (m < i) {
      return false;
    }
    m = Math.max(m, i + nums[i]);
  }
  return true;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0])); // true
console.log(canJump([0, 0])); // false
