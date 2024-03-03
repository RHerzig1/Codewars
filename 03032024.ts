// Write a function that removes duplicate values from a linked list.

// Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function deleteDuplicates(head: any): any {
  if (!head) {
    return head;
  }

  let currNode: any = head;
  let nextNode: any = head.next;

  while (nextNode) {
    if (currNode.val !== nextNode.val) {
      currNode.next = nextNode;
      currNode = nextNode;
    }

    nextNode = nextNode.next;
  }

  currNode.next = null;

  return head;
}

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// head: The beginning of a sorted (ascending) linked list. 0 <= list length <= 300. -100 <= Node.val <= 100; May be null.
// Return the linked list with after removing duplicates. Ensure it's sorted.

// Start at the head.
// Declare a nextNode variable.
// Iterate through the list. When head.val !== head.next.val, link the nodes.
// Return the head node.
