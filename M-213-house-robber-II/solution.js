/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  let curMax = Math.max(nums[0], nums[1]);
  let prevMax = Math.min(nums[0], nums[1]);
  for (let i = 2; i < nums.length; ++i) {
    if (
      prevMax + Math.max(nums[0], nums[i]) - Math.min(nums[0], nums[i]) >
      curMax
    ) {
      let tem = curMax;
      curMax =
        prevMax + Math.max(nums[0], nums[i]) - Math.min(nums[0], nums[i]);
      prevMax = tem;
    } else {
      if (i > 2) {
        curMax = curMax + nums[0];
      }

      prevMax = curMax;
    }

    console.log("curMax");
    console.log(curMax);
    console.log("prevMax");
    console.log(prevMax);
  }

  return curMax;
};

// console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 3, 2])); // 3
