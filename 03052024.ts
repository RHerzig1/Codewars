// Write a function that returns the intersection of two linked lists.

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

function getIntersectionNode(headA: any, headB: any): any {
  const cache = new Map<any, Boolean>();

  let curr = headA;

  while (curr) {
      cache.set(curr, true);
      curr = curr.next;
  }

  curr = headB;

  while (curr) {
      if (cache.has(curr)) {
          return curr;
      }

      curr = curr.next
  }

  return null;
};

// https://leetcode.com/problems/intersection-of-two-linked-lists/

// headA: ListNode. The head of list A. 1 <= length <= 3 * 10^4. 1 <= Node.val <= 10^5.
// headB: ListNode. The head of list B. 1 <= length <= 3 * 10^4. 1 <= Node.val <= 10^5.
// Return the node where the lists intersect, or null if they don't intersect.

// Declare a cache.
// Iterate through headA. Cache each node.
// Iterate through headB. Check each node to see if it's cached.
// If so, return that node.
// If no nodes are cached, return null.
