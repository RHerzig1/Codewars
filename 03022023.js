// Write a recursive algorithm that reverses the node order of a linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head, prev = null) {
  if(!head) return prev
  const next = head.next
  head.next = prev
  return reverseList(next, head)
}

// A linked list.
// Return a reversed copy of the linked list.

// Reverse the nodes by reassigning the pointer