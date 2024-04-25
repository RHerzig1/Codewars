// Write a function that inserts the greatest common divisor between each node of a linked list.

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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let node = head;
  let leftVal = 0;
  let rightVal = 0;
  let gcdVal = 0;

  while (node.next) {
    // Assign leftVal and rightVal.
    leftVal = node.val;
    rightVal = node.next.val;

    // Calculate the GCD.
    gcdVal = gcd(leftVal, rightVal);

    // Insert the GCD node.
    const gcdNode = new ListNode(gcdVal, node.next);
    node.next = gcdNode;

    // Increment node.
    node = node.next.next;
  }

  return head;
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

console.log(insertGreatestCommonDivisors([18, 6, 10, 3]), [18, 6, 6, 2, 10, 1, 3]);
console.log(insertGreatestCommonDivisors([7]), [7]);
// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/

// head: ListNode. 1 <= Linked List length <= 5000. 1 <= ListNode.val <= 1000.
// Return the head of the linked list after adding the GCD between each node.

// Declare a node, left, and right values.
// Iterate through the node, reassign left and right and calculate the GCD.
// Return the head.
