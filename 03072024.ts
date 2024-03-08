// Write a function that removes all nodes of a certain value from a linked list.

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

function removeElements(head: any, val: number): any | null {
  while (head && head.val === val) {
    head = head.next;
  }

  let curr = head;

  while (curr) {
    if (curr.next && curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

// console.log(removeElements([1,2,6,3,4,5,6], 6), [1, 2, 3, 4, 5]);
// console.log(removeElements([], 1), []);
// console.log(removeElements([7,7,7,7], 7), []);

// head: NodeList. The head of a singly linked-list. 0 <= length <= 10^4. 1 <= Node.val <= 50.
// val: number. The value to remove from the linked list. 0 <= val <= 50.
// Return the head of the linked list after the nodes are removed.

// Reassign head until it no longer matches the value.
// Iterate through the rest of the nodes and remove any that match the value.
// Return the head.
