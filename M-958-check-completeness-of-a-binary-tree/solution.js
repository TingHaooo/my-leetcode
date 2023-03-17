/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isCompleteTree = function (root) {
  const getInOrderValues = (root, arr = [], dept = 1) => {
    if (!root) {
      arr[dept - 1] = arr[dept - 1] ? [...arr[dept - 1], null] : [null];
      return arr;
    }
    if (!arr[dept - 1]) {
      arr[dept - 1] = [root.val];
    } else {
      arr[dept - 1].push(root.val);
    }
    getInOrderValues(root.left, arr, dept + 1);
    getInOrderValues(root.right, arr, dept + 1);

    return arr;
  };

  const values = getInOrderValues(root);

  let result = true;
  for (let i = 0; i < values.length; ++i) {
    let nullIndex = 0;
    for (let j = 0; j < values[i].length; ++j) {
      if (i && !values[i - 1][values[i - 1].length - 1] && values[i][j]) {
        return false;
      }
      if (!nullIndex && !values[i][j]) {
        nullIndex = i;
      }
      if (nullIndex && values[i][j]) {
        return false;
      }
    }
  }

  return result;
};

const list = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isCompleteTree(list));
