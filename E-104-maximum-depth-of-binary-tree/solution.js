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
var maxDepth = function (root, dept = 0) {
  if (!root) return dept;
  const newDept = dept + 1;
  return Math.max(maxDepth(root.left, newDept), maxDepth(root.right, newDept));
};
