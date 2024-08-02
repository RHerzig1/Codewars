// Reverse a linked list recursively.

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
  return recursive(null, head);
}

function recursive(prev: ListNode | null, curr: ListNode | null) {
  if (curr === null) {
    return prev;
  }

  const next = curr.next;
  curr.next = prev;
  return recursive(curr, next);
}

// https://leetcode.com/problems/reverse-linked-list/

// head: ListNode | null. 0 <= number of nodes <= 5000. -5000 <= Node.val <= 5000.
// Return the head of the reversed linked list.
