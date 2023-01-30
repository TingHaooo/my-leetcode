/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!m) {
    for (let k = 0; k < nums2.length; ++k) {
      nums1[k] = nums2[k];
    }
    return;
  }

  if (!n) {
    return;
  }

  const cpNums1 = nums1.slice(0, m);
  let i = 0;
  let j = 0;
  while (i < m || j < n) {
    if (cpNums1[i] > nums2[j]) {
      nums1[i + j] = nums2[j];
      j++;
    } else {
      nums1[i + j] = cpNums1[i];
      i++;
    }
  }
  console.log(nums1);
  return;
};

merge([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
