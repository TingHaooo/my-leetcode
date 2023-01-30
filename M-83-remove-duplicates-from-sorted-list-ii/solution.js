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

var deleteDuplicates = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  let dummy = null;
  let tem = null;
  let cur = head;
  let prev = new ListNode("dummy", null);

  while (cur) {
    let isPrevSame = tem ? cur.val === tem.val : false;
    let isNextSame = cur.next ? cur.val === cur.next.val : false;
    if (isPrevSame || isNextSame) {
      tem = cur;
      if (!cur.next) {
        prev.next = null;
      }
      cur = cur.next;
    } else {
      if (!dummy) {
        dummy = cur;
      }
      prev.next = cur;
      tem = cur;
      prev = cur;
      cur = cur.next;
    }
  }

  return dummy;
};
