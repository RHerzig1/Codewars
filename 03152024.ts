// Write a function that reorders a linked list: Node[1], Node[N], Node[2], Node[N - 1], etc.

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
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // Find middle of Linked List.
  let fast: ListNode | null = head.next;
  let slow: ListNode | null = head;

  while (fast && fast?.next) {
    fast = fast.next?.next;
    slow = slow.next;
  }

  // Reverse 2nd half of Linked List.
  let next: ListNode | null = slow.next?.next;
  let curr: ListNode | null = slow.next;
  let prev: ListNode | null = null;
  slow.next = null;

  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }

  // "Zip" Linked Lists together.
  let top: ListNode | null = head;
  let bottom: ListNode | null = prev;
  let topNext: ListNode | null = top?.next;
  let bottomNext: ListNode | null = bottom?.next;

  while (topNext || bottomNext) {
    top.next = bottom;
    bottom.next = topNext;
    top = topNext;
    topNext = top?.next;
    bottom = bottomNext;
    bottomNext = bottom?.next;
  }

  top.next = bottom;
}

console.log(reorderList([1, 2, 3, 4]), 1, 4, 2, 3);
console.log(reorderList([1, 2, 3, 4, 5]), [1, 5, 2, 4, 3]);
// https://leetcode.com/problems/reorder-list/

// head: ListNode | null. The head of a linked list. 0 <= length <= 5*10^4. 0 <= Node.val <= 1000.
// No return. Reorder the linked list inplace: Node[1], Node[N], Node[2], Node[N - 1], etc.

// Find middle of Linked List.
// Reverse 2nd half of Linked List.
// "Zip" Linked Lists together.
