// Double the number represented by a linked list.

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

function doubleIt(head: ListNode | null): ListNode | null {
  // Declare cache and pointers.
  const cache = [];
  let curr = head;

  // Iterate linked list, populate cache with node values.
  while (curr) {
    cache.push(curr.val);
    curr = curr.next;
  }

  // Double number. Convert to stack.
  const number = BigInt(cache.join("")) * BigInt(2);
  const stack = String(number).split("").reverse().map(Number);

  curr = head;

  while (stack.length > 0) {
    // Remove value from stack and assign to node.
    const value = stack.pop();
    curr.val = value;

    // Create a new node, if needed.
    if (curr.next === null && stack.length > 0) {
      const next = new ListNode();
      curr.next = next;
    }

    curr = curr.next;
  }

  return head;
}

// [1, 8, 9] => [3, 7, 8];
// [9, 9, 9] => [1, 9, 9, 8];
// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/

// head: ListNode | null. 1 <= number of nodes <= 10^4. 0 <= Node.val <= 9.
// Return the head of the linked list after doubling it.
