/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  // loop 高度
  for (let i = 0; i < height.length; ++i) {
    // 往左右查找線，假如線小於等於高度，計算面積比大小
    // 右邊
    for (let k = i + 1; k < height.length; ++k) {
      if (height[k] <= height[i]) {
        const area = height[k] * (k - i);
        maxArea = Math.max(area, maxArea);
      }
    }
    // 左邊
    for (let j = i - 1; j >= 0; --j) {
      if (height[j] <= height[i]) {
        const area = height[j] * (i - j);
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};

console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 2, 1])); // 2
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
