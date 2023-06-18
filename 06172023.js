// Write a function that completes the buildOneTwoThree linked list challenge.

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce((head, data) => push(head, data), null);
}

console.log(push(null, 1).data, 1);
console.log(push(null, 1).next, null);
console.log(push(new Node(1), 2).data, 2);
console.log(push(new Node(1), 2).next.data, 1);

console.log(buildOneTwoThree().data, 1);
console.log(buildOneTwoThree().next.data, 2);
console.log(buildOneTwoThree().next.next.data, 3);
console.log(buildOneTwoThree().next.next.next, null);

