// Write a function that adds nodes of a link list between two zeros.

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

function mergeNodes(head: ListNode | null): ListNode | null {
  let curr = head;
  let prev = head;
  let sum = 0;

  while (curr) {
    if (curr.val === 0 && sum > 0) {
      const newNode = new ListNode(sum);
      prev.next = newNode;
      prev = prev.next;
      sum = 0;
    } else {
      sum += curr.val;
    }

    curr = curr.next;
  }

  return head.next;
}

console.log(mergeNodes([0, 3, 1, 0, 4, 5, 2, 0]), [4, 11]);
console.log(mergeNodes([0, 1, 0, 3, 0, 2, 2, 0]), [1, 3, 4]);
// https://leetcode.com/problems/merge-nodes-in-between-zeros/

// head: ListNode. Singly-linked list. 3 < = list.length <= 2*10^5. 0 <= ListNode.val <= 1000. First and last node values are 0.
// Return the head of a linked list where the values between the 0s are summed. Remove all 0s as well.

// Iterate throught the list node and cache each value.
// If the value is 0, calculate the sum and create a new node with that value.
// Link prev to the new node.
// Return head.next.
