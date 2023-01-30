/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (r - l > 0) {
    let temSum = numbers[r] + numbers[l];
    if (temSum > target) {
      r -= 1;
    } else if (temSum < target) {
      l += 1;
    } else {
      return [l + 1, r + 1];
    }
  }
};

console.log(twoSum([-1, 0], -1)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
