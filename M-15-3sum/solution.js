/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  /**
   * @param {number[]} nums
   * @param {number} r
   * @param {number} dept
   * * @param {number[][]} cArr
   */

  const getCombination = (
    nums,
    r,
    dept = 1,
    index = 0,
    temArr = [],
    cObj = {}
  ) => {
    if (dept > r) {
      const sum = temArr.reduce((acc, cur) => acc + cur, 0);
      if (sum === 0) {
        const key = [...temArr].sort((a, b) => a - b).join(",");
        cObj[key] = [...temArr];
      }
      return;
    }

    for (let i = index; i + r - dept < nums.length; ++i) {
      temArr[dept - 1] = nums[i];
      getCombination(nums, r, dept + 1, i + 1, temArr, cObj);
    }
    return Object.values(cObj);
  };
  return getCombination(nums, 3);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
