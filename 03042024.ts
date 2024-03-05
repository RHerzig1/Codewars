// Write a function that returns true or false if a linked list has a cycle.

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

function hasCycle(head: any): boolean {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    fast = fast?.next?.next;
    slow = slow?.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// https://leetcode.com/problems/linked-list-cycle/

// head: ListNode. 0 <= length <= 10^4. -10^5 <= Node.val <= 10^5.
// Return true if the linked list has a cycle. Return false if it does not.

// Declare a fast and slow pointer.
// Iterate them fast.next.next and slow.next respectively.
// If they ever meet, then the linked list is a loop.
// Otherwise, return false when fast reaches the end.