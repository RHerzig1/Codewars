// Find the middle node of a linked list.

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

function middleNode(head: ListNode | null): ListNode | null {
  // Declare fast and slow pointers.
  let fast = head;
  let slow = head;

  // While the fast pointer is valid, increment both pointers.
  while (fast) {
    // If fast lands on the last node, do not increment slow.
    if (!fast.next) {
      break;
    } else {
      fast = fast.next.next;
    }

    slow = slow.next;
  }

  // Return the node value at the slow pointer.
  return slow;
}

// [1, 2, 3, 4, 5];
// Fast: [1, 3, 5]
// Slow: [1, 2, 3]

// [1, 2, 3, 4, 5, 6];
// Fast: [1, 3, 5, null]
// Slow: [1, 2, 3, 4]

// https://leetcode.com/problems/middle-of-the-linked-list/

// head: ListNode | null. 1 <= number of nodes <= 100. 1 <= Node.val <= 100.
// Return the middle node of the linked list. If there are two middle nodes, return the 2nd.
