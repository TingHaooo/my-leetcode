/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  let d = 0;
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] === nums[i + 1]) {
      ++d;
      if (d === 1) {
        nums[k] = nums[i + 1];
        ++k;
      }
      continue;
    }
    nums[k] = nums[i + 1];
    ++k;
    d = 0;
  }
  return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7
