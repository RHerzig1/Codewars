// Reverse a portion of a linked list.

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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === right) {
    return head;
  }

  // Declare pointers for before, middle, after.
  const dummyTwo = new ListNode(0, head);
  const dummy = new ListNode(0, dummyTwo);
  let beforeHead = dummy;
  let beforeTail = dummy;
  let middleHead = dummy;
  let middleTail = dummy;
  let afterHead = dummy;
  let curr = dummy;
  let count = -1;

  // Split linked list into before, middle, after portions.
  while (count <= right) {
    count++;
    curr = curr.next;

    // Middle portion
    if (count === left - 1) {
      beforeTail = curr;
      middleHead = curr.next;
    }

    // After portion
    if (count === right) {
      middleTail = curr;
      afterHead = curr.next;
    }
  }

  beforeTail.next = null;
  middleTail.next = null;

  // Reverse the middle linked list.
  let prev = middleHead;
  curr = middleHead;
  let next = middleHead.next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Relink before, middle, and after lists.
  beforeTail.next = middleTail;
  middleHead.next = afterHead;

  return beforeHead.next.next;
}

// [1, 2, 3, 4, 5], 2, 4 => [1, 4, 3, 2, 5];
// [5], 1, 1, => [5];
// [1, 2, 3, 4, 5], 1, 3 => [3, 2, 1, 4, 5];

// head: ListNode | null. 1 <= number of nodes <= 500. -500 <= Node.val <= 500.
// left: number. 1 <= left <= right.
// right: number. left <= right <= number of nodes.
