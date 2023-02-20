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

var minDiffInBST = function (root) {
  const tree = [];
  const inOrderTraversal = (root) => {
    if (!root) return;
    inOrderTraversal(root.left);
    tree.push(root.val);
    inOrderTraversal(root.right);
  };

  inOrderTraversal(root);

  let minDiff = Infinity;
  for (let i = 1; i < tree.length; ++i) {
    minDiff = Math.min(minDiff, tree[i] - tree[i - 1]);
  }

  return minDiff;
};
