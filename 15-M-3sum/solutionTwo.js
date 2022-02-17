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
    let l = i + 1;
    let r = sortedNums.length - 1;

    while (r > l) {
      let temSum = sortedNums[i] + sortedNums[l] + sortedNums[r];
      if (temSum > 0) {
        r -= 1;
      } else if (temSum < 0) {
        l += 1;
      } else {
        res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        console.log(i, l, r);
        while (r > l && sortedNums[l + 1] === sortedNums[l]) {
          l += 1;
        }
        while (r > l && sortedNums[r - 1] === sortedNums[r]) {
          r -= 1;
        }
        r -= 1;
        l += 1;
      }
    }
  }
  return res;
};

console.log(threeSum([-2, 0, 0, 2, 2]));
