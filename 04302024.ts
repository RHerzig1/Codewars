// Write a function that swaps the kth node from the beginning and end of a linked list.

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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let countTotal = 1;
  let countCurr = 1;
  let curr = head;
  let left = head;
  let right = head;

  // Store the length of the array in countTotal.
  while (curr) {
    curr = curr.next;
    countTotal++;
  }

  // Calibrate k to the left half of the linked list.
  k = Math.min(k, Math.abs(countTotal - k));

  // Place left pointer on kth node.
  while (countCurr < k) {
    left = left.next;
    right = right.next;
    countCurr++;
  }

  // Place right pointer on countTotal - kth node.
  while (countCurr < Math.abs(countTotal - k)) {
    right = right.next;
    countCurr++;
  }

  // Swap left and right pointer values.
  const cacheVal = right.val;
  right.val = left.val;
  left.val = cacheVal;

  return head;
}

// console.log(swapNodes([1, 2, 3, 4, 5], 2), [1, 4, 3, 2, 5]);
// console.log(swapNodes([7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5), [7, 9, 6, 6, 8, 7, 3, 0, 9, 5]);
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// head: ListNode | null. 1 <= head.length <= 10^5. 0 <= ListNode.val <= 100.
// k: number. 1 <= k <= head.length.
// Return the head after swapping the kth node from the beginning and the end. The lists are 1-indexed.

// Iterate the linked list to get a count of nodes.
// Declare left and right pointers and interate the linked list again.
// When left lands on the kth node, stop iterating it.
// When right lands on the kth node from the end, stop iterating it.
// Swap the values and return the head.
