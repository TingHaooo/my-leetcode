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
var swapPairs = function (head) {
  const oddNodes = [];
  const evenNodes = [];
  const swapPairsNodes = [];
  const loopNodeLists = (head, index) => {
    if (!head) {
      return;
    }
    if (index % 2 === 0) {
      oddNodes.push(head);
    } else {
      evenNodes.push(head);
    }
    loopNodeLists(head.next, index + 1);
  };

  loopNodeLists(head, 0);

  for (let i = 0; i < oddNodes.length; ++i) {
    if (evenNodes[i]) {
      swapPairsNodes.push(evenNodes[i]);
    }
    if (oddNodes[i]) {
      swapPairsNodes.push(oddNodes[i]);
    }
  }

  for (let i = 0; i < swapPairsNodes.length; ++i) {
    if (swapPairsNodes[i + 1]) {
      swapPairsNodes[i].next = swapPairsNodes[i + 1];
    } else {
      swapPairsNodes[i].next = null;
    }
  }

  if (!swapPairsNodes.length) return head;
  return swapPairsNodes[0];
};
