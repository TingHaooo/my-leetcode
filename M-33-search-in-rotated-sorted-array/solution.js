/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left] === target ? left : -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
// console.log(search([0, 1, 3, 4, 5, 6, 7], 0)); // 0
console.log(search([6, 7, 0, 1, 2, 4, 5], 4)); // 0
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
// console.log(search([1], 0)); // -1
