/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  try {
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  } catch (e) {
    return false;
  }
};
