/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//  var mergeTwoLists = function (list1, list2) {
//   if (list1 === null && list2 === null) return null;
//   if (list1 === null) return list2;
//   if (list2 === null) return list1;

//   if (list1.val >= list2.val) {
//     list2.next = mergeTwoLists(list1, list2.next);
//     return list2;
//   } else {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   }
// };
var mergeKLists = function (lists) {
  if (lists.every((l) => !l)) return null;

  let min = Infinity;
  let minI = 0;
  for (let i = 0; i < lists.length; ++i) {
    if (lists[i].val < min) {
      min = lists[i].val;
      minI = i;
    }
  }
  const newList = [...lists];
  lists[minI].next = mergeKLists([
    lists[minI].next,
    ...newList.splice(minI, 1),
  ]);
  return lists[minI];
};
