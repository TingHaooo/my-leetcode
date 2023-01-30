// *
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let cur;
  const dummy = new ListNode(0);
  dummy.next = head;
  cur = dummy;

  while (cur.next && cur.next.next) {
    const first = cur.next;
    const sec = cur.next.next;
    cur.next = sec;
    first.next = sec.next;
    sec.next = first;
    cur = cur.next.next;
  }

  return dummy.next;
};
