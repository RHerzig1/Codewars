// Write a function that deletes a node from a linked list when given only that node.

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

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  let next = node.next;

  node.val = next.val;
  node.next = next.next;
}

console.log(deleteNode([5]), [4, 1, 9]); // originally [4, 5, 1, 9]
console.log(deleteNode([1]), [4, 5, 9]); // originally [4, 5, 1, 9]
// https://leetcode.com/problems/delete-node-in-a-linked-list/

// node: ListNode | null. The node to be removed from the linked list. Always in the list and never the tail.
// Do not return anything. Remove the node in-place.
// Note: the head of the linked list is not provided.

// Set the value of the provided node to that of the following node.
// "Delete" the following node by setting node.next to node.next.next.