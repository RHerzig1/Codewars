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

function oddEvenList(head: ListNode | null): ListNode | null {
  // Edge case if linked list is not long enough.
  if (head === null || head.next === null || head.next.next === null) {
    return head;
  }

  // Declare pointers.
  let last = head;
  let split = head;
  let prev = head;
  let curr = head;
  let index = 1;

  // Iterate the last and split pointers until they point to the last node.
  while (last.next) {
    last = last.next;
    split = split.next;
  }

  // Iterate the list and move every odd indexed node to the end.
  while (curr !== split) {
    const next = curr.next;

    // If node has an even index, move it to the end of the linked list.
    if (index % 2 === 0) {
      // Link the current node to the last position.
      last.next = curr;
      last = last.next;
      last.next = null;

      // Link the previous node to the next node, to fill the gap.
      prev.next = next;
    } else {
      prev = curr;
    }

    curr = next;
    index++;
  }

  // Edge case if split node is an even index.
  if (index % 2 === 0) {
    const next = curr.next;

    // Link the current node to the last position.
    last.next = curr;
    last = last.next;
    last.next = null;

    // Link the previous node to the next node, to fill the gap.
    prev.next = next;
  }

  return head;
}

// [1, 2, 3, 4, 5] => [1, 3, 5, 2, 4];
// https://leetcode.com/problems/odd-even-linked-list/

// head: ListNode | null. 0 <= number of nodes <= 10^4. -10^6 <= Node.val <= 10^6.
// Return the head of the linked list after moving all the even indexed nodes to the end.
