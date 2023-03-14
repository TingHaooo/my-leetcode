/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root, sum = 0) {
  if (!root) return 0;
  let newSum = sum * 10 + root.val;
  if (!root.left && !root.right) {
    return newSum;
  }
  return sumNumbers(root.left, newSum) + sumNumbers(root.right, newSum);
};
