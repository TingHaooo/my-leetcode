/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!n) return;
  if (!m) {
    for (let i = 0; i < n; ++i) {
      nums1[i] = nums2[i];
    }
    return;
  }

  let copyNums1 = nums1.slice(0, m);
  let k = 0;
  let i = 0;
  let j = 0;

  while (k < m + n) {
    let num1 = typeof copyNums1[i] === "undefined" ? Infinity : copyNums1[i];
    let num2 = typeof nums2[j] === "undefined" ? Infinity : nums2[j];

    if (num1 < num2) {
      nums1[k] = copyNums1[i];
      ++i;
      ++k;
    } else {
      nums1[k] = nums2[j];
      ++j;
      ++k;
    }
  }
};
