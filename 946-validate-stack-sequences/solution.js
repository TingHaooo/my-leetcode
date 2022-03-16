/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

var validateStackSequences = function (pushed, popped) {
  /**
   * 檢查每個需要被 pop 的 item
   * 如果 stack pushed 完，無法 pop 出 item，return false
   * 若每個 item 都可以，return true
   */
  let cPushed = [...pushed];
  let stack = [];
  for (let i = 0; i < popped.length; ++i) {
    let indexOfItem = cPushed.indexOf(popped[i]);
    if (indexOfItem !== -1) {
      stack.push(...cPushed.splice(0, indexOfItem + 1));
    }
    if (stack.pop() !== popped[i]) {
      return false;
    }
  }

  return true;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
console.log(validateStackSequences([4, 0, 1, 2, 3], [4, 2, 3, 0, 1]));
console.log(validateStackSequences([0, 2, 1], [0, 1, 2]));
