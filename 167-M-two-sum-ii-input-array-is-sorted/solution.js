/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const seen = {};
  for (let i = 0; i < numbers.length; ++i) {
    const remaining = target - numbers[i];
    if (remaining in seen) {
      const result = [seen[remaining] + 1, i + 1];
      return result;
    }
    seen[numbers[i]] = i;
  }
};

console.log(twoSum([-1, 0], -1)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
