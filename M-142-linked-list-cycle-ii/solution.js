/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let map = new Map();
  let cur = head;

  while (cur) {
    if (map.get(cur.next)) {
      return cur.next;
    }
    map.set(cur, cur);
    cur = cur.next;
  }

  return null;
};
