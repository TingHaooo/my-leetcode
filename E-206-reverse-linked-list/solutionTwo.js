/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const reverseNode = (x, y) => {
    if (!x) {
      return y;
    } else {
      const nextNode = x.next;
      x.next = y;
      return reverseNode(nextNode, x);
    }
  };

  return reverseNode(head, null);
};
