/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let l = 0;
  let r = height.length - 1;

  while (r > l) {
    let minH = Math.min(height[l], height[r]);
    area = Math.max(area, minH * (r - l));

    while (r > l && height[l] <= minH) l++;
    while (r > l && height[r] <= minH) r--;
  }
  return area;
};

console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 2, 1])); // 2
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
