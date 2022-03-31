/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i + 1];
      ++k;
    }
  }

  return k;
};

console.log(removeDuplicates([1, 2, 3])); // 2
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
