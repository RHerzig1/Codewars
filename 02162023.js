// Write an algorithm creates a new list by comparing two lists using an implimented function.

// function Node(value, next=null) {
//   this.value = value;
//   this.next = next;
// }

function zipWith(fn,head0,head1) {
  if (!head0 || !head1) return null
  return new Node(fn(head0.value, head1.value), zipWith(fn, head0.next, head1.next));
}

// A function and two lists.
// Return a new list where each node is a result of comparing both lists using the function.

// Use recursion.
// Base case: If there is no node in one of the lists, return null.
// Recursive case: Construct a new node. Pass in the results of the callback funciton and the recursive function.