// Write a function that merges two sorted linked lists.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let list3 = new ListNode();
  const head = list3;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      list3.next = list1;
      list1 = list1.next;
    } else {
      list3.next = list2;
      list2 = list2.next;
    }

    list3 = list3.next;
  }

  if (list1) {
    list3.next = list1;
  } else if (list2) {
    list3.next = list2;
  }

  return head.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]), [1, 1, 2, 3, 4, 4]);
console.log(mergeTwoLists([], []), []);
console.log(mergeTwoLists([], [0]), [0]);

// list1: ListNode. Sorted in non-decreasing order. 0 <= ListNode.length <= 50. -100 <= Node.val <= 100.
// list2: ListNode. Sorted in non-decreasing order. 0 <= ListNode.length <= 50. -100 <= Node.val <= 100.
// Return the head of a merged link list.

// Insert a dummy node to start the list.
// Iterate through list1 and list2 and link the smaller value into the result.
// When either list1 or list2 are null, just link the remaining nodes from the other list.
// Return the result.
