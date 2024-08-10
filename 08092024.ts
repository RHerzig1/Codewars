// Partition a linked list.

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

function partition(head: ListNode | null, x: number): ListNode | null {
  // Create two seperate linked lists - one for nodes with values less < x, and another with values >= x.
  const beforeHead = new ListNode(0);
  const afterHead = new ListNode(0);
  let before = beforeHead;
  let after = afterHead;

  // Traverse the list and partition the nodes into the two lists.
  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }

    head = head.next;
  }

  // Connect the before list with the after list.
  after.next = null; // Important to avoid potential cycle in the linked list.
  before.next = afterHead.next;

  return beforeHead.next;
}

// [1, 4, 3, 2, 5, 2], 3 => [1, 2, 2, 4, 3, 5];
// [2,1], 2 => [1, 2];
// [1], 3 => [1];
// [1], -3 => [1];
// [1, 4, 3, 2, 5, 2], -10 => [1, 4, 3, 2, 5, 2];
// [1, 4, 3, 2, 5, 2], 10 => [1, 4, 3, 2, 5, 2];

// head:  ListNode | null. 0 <= number of nodes <= 200. -100 <= Node.val <= 100.
// x: number. Target value. -200 <= x <= 200.
// Return the head of the linked list after sorting it. Place all nodes with values less than x before the nodes equal or greater to x. Keep relative order.
