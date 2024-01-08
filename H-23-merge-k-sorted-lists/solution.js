/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.filter((n) => n).length) return null;

  let curIndex = 0;
  let curNode = null;
  let curValue = Infinity;
  for (let i = 0; i < lists.length; ++i) {
    if (!lists[i]) continue;
    const list = lists[i];
    if (list.val < curValue) {
      curValue = list.val;
      curNode = list;
      curIndex = i;
    }
  }

  lists[curIndex] = lists[curIndex].next;
  curNode.next = mergeKLists(lists);

  return curNode;
};

const list1 = new ListNode(3, null);
const list2 = new ListNode(2, new ListNode(5, null));

console.log(mergeKLists([])); //[]
console.log(mergeKLists([null])); //[]
console.log(mergeKLists([list1, list2]));
