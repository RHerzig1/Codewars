// Write a function that returns the max sum of polar nodes in a linked list.

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

function pairSum(head: ListNode | null): number {
  let fast = head;
  let slow = head;
  let prev: ListNode | null = null;
  let next = head.next;
  let maxSum = 0;

  while (fast) {
    fast = fast.next.next || null;
    slow.next = prev;
    prev = slow;
    slow = next;
    next = next.next;
  }

  let left = prev;
  let right = slow;

  while (left && right) {
    maxSum = Math.max(maxSum, left.val + right.val);
    left = left.next;
    right = right.next;
  }

  return maxSum;
}

console.log(pairSum([5, 4, 2, 1]), 6);
console.log(pairSum([4, 2, 2, 3]), 7);
console.log(pairSum([1, 100000]), 100001);
console.log(pairSum([5, 4, 2, 1, 1, 10]), 15);

// head: ListNode | null. 2 <= head.length <= 10^5. 1 <= ListNode.val <= 10^5.
// Return the largest sum of polar nodes.

// Iterate a fast and slow pointer to find the middle.
// Reverse half the linked list.
// Iterate through both lists and cache the maxSum.
