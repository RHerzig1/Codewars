// Remove the middle node from a linked list.

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

function deleteMiddle(head: ListNode | null): ListNode | null {
  // Edge case if head is null or linked list has a single node.
  if (!head || !head.next) {
    return null;
  }

  // Declare pointers.
  let fast = head;
  let slow = head;
  let prev = null;

  // Increment pointers.
  while (fast && fast.next) {
    // Prev starts at null, then increments one node behind slow.
    if (!prev) {
      prev = head;
    } else {
      prev = prev.next;
    }

    fast = fast.next.next;
    slow = slow.next;
  }

  // Route the nodes to skip the middle node.
  const next = slow.next;
  prev.next = next;

  return head;
}

// [1, 1, 2, 3, 4] => [1, 1, 3, 4];
// [1, 1, 2, 3, 4, 5] => [1, 1, 3, 4, 5];

// head: ListNode | null. 1 <= number of nodes <= 10^5. 1 <= Node.val <= 10^5.
// Return the head after deleting the middle node of the linked list. The middle node is [n / 2] where n is the number of nodes.
