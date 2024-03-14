// Write a function that removes duplicate values from a linked list.

// Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  while (head) {
    if (head.val === head.next?.val) {
      head.next = head.next.next;
    } else {
      break;
    }
  }

  let curr = head;

  while (curr) {
    if (curr.val === curr.next?.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// head: The beginning of a sorted (ascending) linked list. 0 <= list length <= 300. -100 <= Node.val <= 100; May be null.
// Return the linked list with after removing duplicates. Ensure it's sorted.

// Start at the head.
// Declare a nextNode variable.
// Iterate through the list. When head.val !== head.next.val, link the nodes.
// Return the head node.
