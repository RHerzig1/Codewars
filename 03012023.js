// Write an algorithm that reverses the node order of a linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  let node = head;
  let prev = null;
  let next = null;

  while (node != null) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  node = prev;
  return node;
}

// A linked list.
// Return a reversed copy of the linked list.

// Reverse the nodes by reassigning the pointer.
// 