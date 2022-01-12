/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return 0;

  let jumpStep = 0;
  for (let i = 0; i < nums.length; ) {
    jumpStep += 1;
    if (nums[i] + i >= nums.length - 1) {
      break;
    }

    let maxNum = 0;
    let maxIndex = i + 1;
    for (let j = 0; j < nums[i]; ++j) {
      let curNum = nums[i + j + 1] + i + j + 1;
      if (curNum > maxNum) {
        maxNum = curNum;
        maxIndex = i + j + 1;
      }
    }
    i = maxIndex;
  }

  return jumpStep;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([2, 1, 1, 1, 4])); // 3
console.log(jump([10, 10, 30, 10, 4])); // 1
