// Write an algorithm that returns the middle node of a linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function middleNode(head) {
  let node = head;
  let count = 0;

  while (node.next != null) {
    node = node.next;
    count++;
  }

  countMid = Math.ceil(count / 2);
  count = 0;
  node = head;

  while (node.next != null) {
    node = node.next;
    count++;
    if (count === countMid) {
      return node;
    }
  }

  return node;
}

// Or:

function middleNode(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

// A linked list.
// Return the middle node of the linked list.

// Create two copies of the head.
// Iterate through the list. For each iteration, increase "fast" by two nodes and "slow" by one node.
// When "fast" reaches null, "slow" is at the middle.
// Return "slow".