/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let results = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let k = 0; k + i < nums.length; ++k) {
      let product = 1;
      for (let z = 0; z < i + 1; ++z) {
        product *= nums[k + z];
      }
      results.push(product);
    }
  }
  console.log(results);
  return Math.max(...results);
};

console.log(maxProduct([2, 3]));
console.log(maxProduct([2, -3]));
console.log(maxProduct([2, -3, -1]));
