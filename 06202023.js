// Write length and count functions for linked lists.

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0
  let node = head
  
  while (node) {
    node = node.next
    count++
  }
  
  return count
}

function count(head, data) {
  let count = 0
  let node = head
  
  while (node) {
    if (node.data === data) {
      count++
    }
    node = node.next
  }
  
  return count
}

console.log(push(null, 1).data, 1);
console.log(push(null, 1).next, null);
console.log(push(new Node(1), 2).data, 2);
console.log(push(new Node(1), 2).next.data, 1);

console.log(buildOneTwoThree().data, 1);
console.log(buildOneTwoThree().next.data, 2);
console.log(buildOneTwoThree().next.next.data, 3);
console.log(buildOneTwoThree().next.next.next, null);

// Length:
// The head node of a linked list. Always valid.
// Return a number indicating the number of nodes in that list.

// Iterate through the list and, while the node is valid, increment a count.
// Return the count.

// Count:
// The head node of a linked list. Always valid. A number indicating the value for which to count.
// Return a number indicating the number of nodes in that list that contain that value.

// Iterate through the list and, while the node is valid, check it's valude. If it matches the parameter, increment a count.
// Return the count.
