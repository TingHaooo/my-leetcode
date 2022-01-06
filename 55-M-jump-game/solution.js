/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let sp = 0;
  let jd = 0;
  // 每一個點，去選擇下一個最大可跳步數位置
  do {
    let maxE = 0;
    jd = 0;
    for (let i = 0; i < nums[sp]; ++i) {
      if (nums[sp + i + 1] > maxE) {
        maxE = nums[sp + i + 1];
        jd = i + 1;
      }
    }
    sp += jd;
    if (sp >= nums.length - 1) {
      return true;
    }
  } while (jd);

  return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0])); // false
