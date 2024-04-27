// Write a function that merges two linked lists by replacing nodes.

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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
  let curr = list1;
  let prev = list1;
  let count = 0;

  while (curr) {
    // Set prev to the last node before list2.
    if (count === a - 1) {
      prev = curr;
    }

    // Set curr to the first node after list2.
    if (count === b + 1) {
      // Link prev and list2.
      prev.next = list2;

      // Iterate prev to the end of list2.
      while (prev.next) {
        prev = prev.next;
      }

      // Linked list2 and curr.
      prev.next = curr;

      // Return the the head of list1.
      return list1;
    }

    count++;
    curr = curr.next;
  }
}

console.log(mergeInBetween([0, 1, 2, 3, 4, 5, 6], 1, 5, [10, 20, 30, 40, 50]), [0, 10, 20, 30, 40, 50, 6]);
console.log(mergeInBetween([0, 2, 4, 6, 8, 10], 2, 3, [1, 3, 5]), [0, 2, 1, 3, 5, 8, 10]);
// https://leetcode.com/problems/merge-in-between-linked-lists/

// list1: ListNode | null. The primary linked list. 3 <= list1.length <= 10^4.
// a: number. The index of the first removed node. 1 <= a <= b.
// b: number. The index of the last removed node. a <= b <= list1.length - 1.
// list2: ListNode | null. The secondary linked list. 1 <= list2.length <= 10^4.

// Iterate through the linked node.
// Count each node (starting with 0).
// At index a, cache the node.
// Iterate until index b.
// Connect a => list2 => b.
// Return the head.
