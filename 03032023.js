// Write an algorithm that reverses the node order of a linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  let prev = null;
  while (head) [head.next, prev, head] = [prev, head, head.next];
  return prev;
}

// A linked list.
// Return a reversed copy of the linked list.

// Use descructuring to reverse the nodes by reassigning the pointer.