// Write an algorithm that counts the number of nodes inside a linked list node, excluding nodes within the tail.

// Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next

function loop_size(node){
  const cache = new Set();
  
  while (!cache.has(node)) {
    cache.add(node)
    node = node.next
  }

  const tail = Array.from(cache).indexOf(node) || 0;
  return cache.size - tail;
}

// A node, as part of a linked list.
// Traverse the tail, if it exists, and count the nodes within the loop.

// Declare a cache.
// Iterate through the nodes. Store each one in a cache.
// When the loop repeats, return the length.
// To account for the tail, remove all elements that occur before the repeated item.