// Create a singly linked list class in JavaScript with append, prepend, delete,and search methods.

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    }
    else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value)
    }
    else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }
  deleteHead() {
    if (!this.head) {
      return null
    }
    else {
      let removedHead = this.head
      if (this.head === this.tail) {
        this.head = this.tail = null
      }
      else {
        this.head = this.head.next
        this.head.prev = null
      }
      return removedHead.value
    }
  }
  deleteTail() {
    if (!this.tail) {
      return null
    }
    else {
      let removedTail = this.tail
      if (this.head === this.tail) {
        this.head = this.tail = null
      }
      else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      return removedTail.value
    }
  }
  search(value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}

const list = new LinkedList()

// Add nodes:
list.append(1)
list.append(2)
list.append(3)

// Prepend nodes:
list.prepend(0)
list.prepend(-1)

// Search nodes:
// console.log(list.search(1))
// console.log(list.search(999))

// Delete nodes:
console.log(list.deleteHead())
console.log(list.deleteTail())
console.log(list.deleteTail())
console.log(list.deleteTail())
console.log(list.deleteTail())

// Final linked list:
console.log(list)

// A queue is a linear data structure that is first in, first out.
// The storage is an object, because removing object properties is faster than the array.shift() method.
// The tail variable will always select the last property entered. Used when enqueuing.
// The head variable will always select the first property entered. Use when dequeuing.