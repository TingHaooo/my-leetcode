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
var isCompleteTree = function (root) {
  let result = true;
  let queue = [];
  queue.push(root);
  // bfs tree
  while (queue.length) {
    let node = queue.shift(root);
    if (!node) {
      if (queue.filter((q) => q).length) {
        result = false;
      }
      break;
    }
    queue.push(node.left);
    queue.push(node.right);
  }

  return result;
};
