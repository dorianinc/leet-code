// const {ListNode, convertToLinkedList, logList } = require("./helpers")
import { ListNode, convertToLinkedList, logList } from "./helpers.js";

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

const mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode();
  let head = dummyHead;

  let current1 = convertToLinkedList(list1);
  let current2 = convertToLinkedList(list2);

  while (current1 && current2) {
    if (current1.val < current2.val) {
      head.next = current1;
      current1 = current1.next;
    } else {
      head.next = current2;
      current2 = current2.next;
    }
    head = head.next;
  }

  head.next = current1 || current2;
  return dummyHead.next;
};

// Test case 1: Both lists have multiple elements and need to be merged
logList(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// Expected output: [1, 1, 2, 3, 4, 4]

// Test case 2: Both lists are empty
logList(mergeTwoLists([], []));
// Expected output: []

// Test case 3: One list is empty, the other has one element
logList(mergeTwoLists([], [0]));
// Expected output: [0]

// Test case 4: Both lists are already sorted with distinct elements
logList(mergeTwoLists([1, 5, 7], [2, 6, 8]));
// Expected output: [1, 2, 5, 6, 7, 8]

// Test case 5: One list is longer than the other
logList(mergeTwoLists([1, 2, 3, 4], [5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

// Test case 6: Lists with negative and positive numbers
logList(mergeTwoLists([-10, -3, 0], [-5, 1, 4]));
// Expected output: [-10, -5, -3, 0, 1, 4]

// Test case 7: Both lists have same elements
logList(mergeTwoLists([2, 2, 2], [2, 2, 2]));
// Expected output: [2, 2, 2, 2, 2, 2]

// Test case 8: All elements of one list are smaller than the other
logList(mergeTwoLists([1, 2, 3], [4, 5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

// const mergeTwoLists = function (list1, list2) {
//   const dummyNode = new ListNode();
//   let tail = dummyNode;
//   let current1 = convertToLinkedList(list1);
//   let current2 = convertToLinkedList(list2);

//   // loop until one of the lists are null
//   while (current1 && current2) {
//     // if the value in current1 is less than current2
//     if (current1.val < current2.val) {
//       // if true, we make that the next value in our tail(aka our dummyNode)
//       tail.next = current1;
//       // since thats been evaluated we move current1 forward one node
//       current1 = current1.next;
//     } else {
//       // if true, we make that the next value in our tail(aka our dummyNode)
//       tail.next = current2;
//       // since thats been evaluated we move current2 forward one node
//       current2 = current2.next;
//     }
//     // once that's been evaluated we move the list up one node
//     tail = tail.next;
//   }

//   // once one of the list is empty you just make the remainder of the leftover list into the next for the tail
//   tail.next = current1 || current2;
//   return dummyNode.next;
// };
