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
var findSecondMinimumValue = function (root) {
  let queue = [root];
  let first = root.val;
  let second = Infinity;

  while (queue.length) {
    let node = queue.pop();
    if (!node) continue;
    queue.push(node.left);
    queue.push(node.right);
    if (node.val < first) {
      first = node.val;
    } else if (node.val < second && first < node.val) {
      second = node.val;
    }
  }

  return second === Infinity ? -1 : second;
};
