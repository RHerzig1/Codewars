// Write a function that converts the binary values of a linked list to an integer.

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
  const binary: number[] = [];
  let node = head;

  while (node) {
    binary.push(node.val);
    node = node.next;
  }

  const integer = parseInt(binary.join(""), 2);
  return integer;
}

console.log(getDecimalValue([1, 0, 1]), 5);
console.log(getDecimalValue([0]), 0);
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

// head: ListNode. 1 <= head.length <= 30. head[i] is 0 or 1.
// Return an integer by combining the value of each node from binary.

// Cache each node.val.
// Use parseInt() to convert binary to an integer.
// Return the result.