// Write a function that removes the Nth Node from the end of a Linked List.

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Calculate the length of the Linked List.
  let curr = head;
  let length = 0;

  while (curr) {
    curr = curr.next;
    length++;
  }

  // Return empty if removing Node from Linked List with  length of 1.
  if (length === 1) {
    return null;
  }

  // Delete the nth node from the end.
  const dummy: ListNode = new ListNode(0, head);
  curr = dummy;
  length = length - n;

  while (curr) {
    if (length === 0) {
      console.log("length is 0");
      curr.next = curr.next?.next || null;
      break;
    }

    curr = curr.next;
    length--;
  }

  return dummy.next;
}

// head: ListNode | null. 0 <= List.length <= 4*10^5. 0 <= Node.val <= 1000.
// n: number. Node to remove, counting from the end.  1 <= n <= List.length.
// Return the head of the list after Nth Node is removed from the end.

// Calculate the length of the Linked List.
// Remove the Nth element.
