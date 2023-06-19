// Write a function that returns the Nth item of a linked list.

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (index < 0 || index % 1 !== 0) {
    throw new Error("Invalid index");
  }

  let count = 0;

  while (count < index) {
    node = node.next;
    count++;
  }

  if (!node) {
    throw new Exception("Invalid linked list or index");
  }

  return node;
}