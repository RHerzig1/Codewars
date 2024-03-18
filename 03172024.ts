// Write a function that creates a deep copy of a linked list with random node pointers.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  // Iterate linked list, create copy of each node and store in hash map.
  let hash = new Map<Node, Node>();
  let curr = head;

  while (curr) {
    const newNode = new Node(curr.val);
    hash.set(curr, newNode);
    curr = curr.next;
  }

  // Iterate linked list, connect Node.val and Node.random of new Nodes.
  curr = head;

  while (curr) {
    const newNode = hash.get(curr);
    const newRandom = hash.get(curr.random);
    const newNext = hash.get(curr.next);

    if (newNext) {
      newNode.next = newNext;
    }

    if (newRandom) {
      newNode.random = newRandom;
    }

    curr = curr.next;
  }

  return hash.get(head);
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: ListNode | null. 0 <= List.length <= 1000. -10^4 <= Node.val <= 10^4. Null.random points to a unique node in the list, or null.
// Return the head of a deep copy of the linked list. No original nodes can be imcluded.

// Iterate linked list, create copy of each node and store in hash map.
// Iterate linked list, connect Node.val and Node.random of new Nodes.
