/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; ++i) {
    let another = target - nums[i];
    if (another in map) {
      return [i, map[another]].sort((a, b) => a - b);
    }
    map[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
console.log(twoSum([3, 2, 4], 6)); //[1, 2]
console.log(twoSum([3, 3], 6)); //[0, 1]
