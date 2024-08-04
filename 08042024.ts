// Swap adjacent nodes in a linked list.

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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
      return head;
  }

  let newHead = head.next; // Move the head to the second node, which will be swapped with the first.
  let prev = null;
  let curr = head;

  while (curr && curr.next) {
      let next = curr.next;

      // Swap the pairs
      curr.next = next.next;
      next.next = curr;

      // Link the previous pair with the current swapped pair
      if (prev) {
          prev.next = next;
      }

      // Move to the next pair
      prev = curr;
      curr = curr.next;
  }

  return newHead;
}

// [1, 2, 3, 4] => [2, 1, 4, 3]
// https://leetcode.com/problems/swap-nodes-in-pairs/

// head: ListNode | null. 0 <= number of nodes <= 100. 0 <= Node.val <= 100.
// Return the head of the linked list after swapping every pair of nodes.