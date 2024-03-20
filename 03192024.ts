// Write a function that returns whether or not a linked list has a cycle.

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

function hasCycle(head: ListNode | null): boolean {
  let slowNode = head;
  let fastNode = head?.next;

  while (fastNode) {
    if (slowNode === fastNode) {
      return true;
    }

    slowNode = slowNode.next;
    fastNode = fastNode.next?.next;
  }

  return false;
}

// head: ListNode | null. 1 <= length <= 10^4. -10^5 <= Node.val <= 10^5.
// Return true if the linked list has a cycle, or false if it doesn't.

// Declare a slowNode and fastNode.
// While fastNode is valid, increment fastNode.next.next. Increment slowNode.next.
// If the variables ever meet on the same node, then there is a cycle. Return true.
// If the loop reaches an end, return false.
