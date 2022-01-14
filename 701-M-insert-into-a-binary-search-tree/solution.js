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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const node = new TreeNode(val);
  if (!root) return node;
  if (root.val < val) {
    // right
    root.right = insertIntoBST(root.right, val);
  } else {
    // left
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};
