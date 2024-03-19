// Write a function that calculates the sum of two linked lists.

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Create a new linked list.
  const dummy: ListNode = new ListNode();
  let l3: ListNode = dummy;
  let carry: number = 0;

  // Iterate through each node from l1 and l2. Calculate the sum and carryover. Create and attach a node to new linked list.
  while (l1 || l2 || carry) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const sum: number = val1 + val2 + carry;
    const value: number = sum % 10;
    carry = Math.floor(sum / 10);

    const newNode: ListNode = new ListNode(value);
    l3.next = newNode;
    l3 = l3.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  // Return the new linked list.
  return dummy.next;
}

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]); // 342 + 465 = 807
// https://leetcode.com/problems/add-two-numbers/

// l1: ListNode | null. Represents a number in reverse order. 1 <= length <= 100. 0 <= Node.val <= 9.
// l2: ListNode | null. Represents a number in reverse order. 1 <= length <= 100. 0 <= Node.val <= 9.
// Return the sum of both numbers as a linked list.

// Create a new linked list.
// Iterate through each node from l1 and l2. Calculate the sum and carryover. Create and attach a node to new linked list.
// Return the new linked list.
