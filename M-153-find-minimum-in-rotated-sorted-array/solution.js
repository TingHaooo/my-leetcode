/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let right = nums.length - 1;
  let left = 0;

  while (Math.abs(right - left) > 1) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] - nums[left] > 0 && nums[right] - nums[mid] > 0) {
      return nums[0];
    }
    if (nums[mid] - nums[left] > 0) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return Math.min(nums[right], nums[left]);
};

console.log(findMin([5, 1, 2, 3, 4])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11
console.log(findMin([11, 13])); // 11
console.log(findMin([11])); // 11
