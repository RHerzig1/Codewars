// Convert linked list values from binary into a number.

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

function getDecimalValue(head: ListNode | null): number {
  // Cache the value from each node.
  const cache: number[] = [];
  let node = head;

  while (node) {
    cache.push(node.val);
    node = node.next;
  }

  // Convert the cache to a number.
  const binary = cache.join("");
  const number = parseInt(binary, 2);

  // Return the number.
  return number;
}

console.log(getDecimalValue([1, 0, 1]), 5);
console.log(getDecimalValue([0]), 0);
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

// head: ListNode | null. 1 <= number of nodes <= 30. Nod.val === 0 || 1.
// Return the number representation of the binary string held by all the nodes.
