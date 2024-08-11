// Remove zero-sum sublists from a linked list.

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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  // Cache <prefix sum, node>
  const cache = new Map<number, ListNode>();
  const dummy = new ListNode(0, head);
  let curr = dummy;
  let prefixSum = 0;

  // Traverse the list. Populate the prefix sum cache and remove nodes.
  while (curr) {
    prefixSum += curr.val;

    if (cache.has(prefixSum)) {
      const prev = cache.get(prefixSum)!;
      let sum = prefixSum;
      let node = prev.next;

      // Remove nodes and their corresponding prefix sums from the cache
      while (node !== curr) {
        sum += node!.val;
        cache.delete(sum);
        node = node!.next;
      }

      // Skip over the zero-sum sublist
      prev.next = curr.next;
    } else {
      cache.set(prefixSum, curr);
    }

    curr = curr.next;
  }

  return dummy.next;
}

// [1, 2, -3, 3, 1] => [3, 1] or [1, 2, 1];
// [-2, -2, 3, -3, 4] => [];
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/

// head: ListNode | null. 1 <= number of nodes <= 1000. -1000 <= node.val <= 1000.
// Return the head after removing zero sum nodes from the list.
