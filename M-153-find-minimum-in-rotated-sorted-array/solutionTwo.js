/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let right = nums.length - 1;
  let left = 0;

  while (right > left) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

console.log(findMin([5, 1, 2, 3, 4])); // 1
console.log(findMin([1, 2, 3, 4, 5, 6])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
// console.log(findMin([11, 13, 15, 17])); // 11
// console.log(findMin([11, 13])); // 11
// console.log(findMin([11])); // 11
