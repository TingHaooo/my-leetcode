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
 * @return {boolean}
 */

var checkIsSymmetric = (p, q) => {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  if (p.val !== q.val) return false;

  return checkIsSymmetric(p.left, q.right) && checkIsSymmetric(p.right, q.left);
};

var isSymmetric = function (root) {
  return checkIsSymmetric(root.left, root.right);
};
