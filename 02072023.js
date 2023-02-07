// Create a queue class in JavaScript with enqueue and dequeue elements.

class Queue {
  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }
  enqueue(elem) {
    this.storage[this.tail] = elem
    this.tail++
  }
  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }
  size() {
    let size = this.tail - this.head
    return size > 0 ? size : 0
  }
}

const queue = new Queue

// Add properties:
queue.enqueue('zero')
queue.enqueue('one')
queue.enqueue('two')

// Remove properties:
queue.dequeue()

// Return size:
console.log(queue.size())

// Final queue:
console.log(queue)

// A queue is a linear data structure that is first in, first out.
// The storage is an object, because removing object properties is faster than the array.shift() method.
// The tail variable will always select the last property entered. Used when enqueuing.
// The head variable will always select the first property entered. Use when dequeuing.