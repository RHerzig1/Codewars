// Write a function that removes linked nodes which has a high value to the right.

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

function removeNodes(head: ListNode | null): ListNode | null {
  let curr = head;
  let prev = null;
  let next = head;

  // Reverse the linked list.
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Remove the smaller values.
  head = prev;
  curr = head.next;
  prev = head;
  let maxValue = prev.val;

  while (curr) {
    if (curr.val >= maxValue) {
      maxValue = curr.val;
      prev.next = curr;
      prev = curr;
    }

    curr = curr.next;
  }

  prev.next = null;

  // Reverse the linked list.
  curr = head;
  prev = null;
  next = curr;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// console.log(removeNodes([5, 2, 13, 3, 8]), [13, 8]);
// console.log(removeNodes([1, 1, 1, 1]), [1, 1, 1, 1]);
// https://leetcode.com/problems/remove-nodes-from-linked-list/

// head: ListNode | null. 1 <= list.length <= 10^5. 1 <= ListNode.val <= 10^5.
// Return the head of a listnode after the nodes with a larger value anywhere to the right are removed.

// Reverse the list node.
// Track the highest value.
// Reverse it again.
