/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let map = new Map();
  let cur = head;
  while (cur) {
    map.set(cur, new Node(cur.val, null, null));
    cur = cur.next;
  }

  cur = head;
  while (cur) {
    let newNode = map.get(cur);
    if (cur.next) {
      newNode.next = map.get(cur.next);
    }
    if (cur.random) {
      newNode.random = map.get(cur.random);
    }
    cur = cur.next;
  }

  return map.get(head);
};
