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
var sumRootToLeaf = function (root) {
  let sum = 0;
  const loop = (root, cur = "") => {
    if (!root) {
      return;
    }
    const nextVal = cur + root.val.toString();

    if (!root.left && !root.right) {
      sum += parseInt(nextVal, 2);
      return;
    }

    loop(root.left, nextVal);
    loop(root.right, nextVal);
  };
  loop(root);

  return sum;
};
