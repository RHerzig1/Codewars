// Find the minumum and maximum nodes between critical points of a linked list.

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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let prev = null;
  let curr = head;
  let next = head.next;
  let index = 0;

  // Cache the local maxima or local minima indexes.
  let firstNodeIndex = 0;
  let prevNodeIndex = 0;
  let currNodeIndex = 0;
  let minDistance = -1;
  let maxDistance = -1;

  // Iterate the linked list.
  while (next) {
    if (prev && next) {
      const prevVal = prev.val;
      const currVal = curr.val;
      const nextVal = next.val;
      const isLocalMaxima = currVal > prevVal && currVal > nextVal;
      const isLocalManima = currVal < prevVal && currVal < nextVal;

      if (isLocalMaxima || isLocalManima) {
        if (firstNodeIndex === 0) {
          firstNodeIndex = index;
          continue;
        }

        prevNodeIndex = firstNodeIndex;
        firstNodeIndex = index;

        minDistance = Math.min(minDistance, currNodeIndex - prevNodeIndex);
        maxDistance = currNodeIndex - firstNodeIndex;
      }
    }

    // Iterate prev, curr, and next nodes.
    prev = curr;
    curr = next;
    next = next.next;
    index++;
  }

  return [minDistance, maxDistance];
}

// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/

// head: ListNode | null. 2 <= number of nodes <= 10^5. 1 <= Node.val <= 10^5.
// Return an array of two values: [minDistance, maxDistance]. Distances are between local maxima and local minima nodes.
//   Distances can be between local maxima/local minima, two local maximas, or two local minimas.
//   Local maxima: Node that has a greater value than nodes directly before and after.
//   Local mimuma: Node that has a lesser value than nodes directly before and after.
// If there are fewer than two critical points, return [-1, -1].
