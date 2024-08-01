// Reverse a linked list iteratively.

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

function reverseList(head: ListNode | null): ListNode | null {
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// https://leetcode.com/problems/reverse-linked-list/

// head: ListNode | null. 0 <= number of nodes <= 5000. -5000 <= Node.val <= 5000.
// Return the head of the reversed linked list.
