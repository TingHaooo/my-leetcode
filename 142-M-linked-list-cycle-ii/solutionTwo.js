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
  try {
    let slow = head.next;
    let fast = head.next.next;

    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next.next;
    }
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  } catch (e) {
    return null;
  }
};
