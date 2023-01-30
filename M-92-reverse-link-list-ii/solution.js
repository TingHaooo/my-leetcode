// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} left
//  * @param {number} right
//  * @return {ListNode}
//  */
// var reverseBetween = function (head, left, right) {
//   const reverseList = (head, n) => {
//     let cur = head;
//     let prev = null;
//     let tail = null;
//     let i = 0;
//     while (i < n + 1) {
//       if (i === 0) {
//         tail = cur;
//       }
//       let tem = cur.next;
//       cur.next = prev;
//       prev = cur;
//       cur = tem;
//       i++;
//     }
//     return [cur, tail];
//   };

//   let cur = head;
//   let i = 1;
//   while (cur) {
//     if (left === i) {
//       reverseList(cur, right - left);
//     } else {
//       i++;
//       cur = cur.next;
//     }
//   }

//   return head;
// };
