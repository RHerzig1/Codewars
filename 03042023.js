// Write an algorithm that concatenates values from a linked list and converts the end result from binary to an integer.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function getDecimalValue(head) {
  const binary = [];

  while (head != null) {
    binary.push(head.val);
    head = head.next;
  }

  return parseInt(binary.join(""), 2);
}

// A linked list.
// Return a reversed copy of the linked list.

// Iterate through each node of the linked list.
// Push the value for each node into an array.
// Join the array and convert it from a binary number into an integer.