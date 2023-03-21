/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  let centerIdx = Math.floor((nums.length - 1) / 2);
  let root = new TreeNode(nums[centerIdx]);

  // left
  root.left = sortedArrayToBST(nums.slice(0, centerIdx));
  // right
  root.right = sortedArrayToBST(nums.slice(centerIdx + 1, nums.length));

  return root;
};
