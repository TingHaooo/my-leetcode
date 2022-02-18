/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  let sortedNums = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; ++i) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    let twoSumRes = twoSum(sortedNums.slice(i + 1), -sortedNums[i]);
    for (let j = 0; j < twoSumRes.length; ++j) {
      res.push([sortedNums[i], ...twoSumRes[j]]);
    }
  }

  let output = [];
  for (let k = 0; k < res.length; ++k) {
    if (output.some((a) => a.every((e, i) => e === res[k][i]))) {
      continue;
    }
    output.push(res[k]);
  }
  return output;
};

var twoSum = function (nums, target) {
  let seen = {};
  let res = [];
  for (let i = 0; i < nums.length; ++i) {
    let remaining = target - nums[i];
    if (remaining in seen) {
      res.push([nums[i], remaining]);
    } else {
      seen[nums[i]] = i;
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
