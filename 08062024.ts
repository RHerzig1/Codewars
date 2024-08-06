// Add nodes from two linked lists.

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
  const l1Stack: number[] = [];
  const l2Stack: number[] = [];

  // Store l1 values in a stack.
  while (l1) {
    l1Stack.push(l1.val);
    l1 = l1.next;
  }

  // Store l2 values in a stack.
  while (l2) {
    l2Stack.push(l2.val);
    l2 = l2.next;
  }

  let l3: ListNode | null = null;

  // While the stack still has values, calculate the sum and link the new node to l3.
  while (l1Stack.length || l2Stack.length) {
    const l1Val = l1Stack.pop() || 0;
    const l2Val = l2Stack.pop() || 0;
    let l3Val = l1Val + l2Val;

    // If l3Val is greater than 10, carry the 1.
    if (l3Val >= 10) {
      l3Val -= 10;

      if (l1Stack.length) {
        l1Stack[l1Stack.length - 1] = l1Stack.at(-1) + 1;
      } else {
        l1Stack.push(1);
      }
    }

    // Create a previous node, which will link towards l3.
    // Reposition l3 to the first node of the list (aka prev).
    const prev = new ListNode(l3Val);
    prev.next = l3;
    l3 = prev;
  }

  return l3;
}

// [7, 2, 4, 3]
// [   5, 6, 4]
// [7, 8, 0, 7]
// https://leetcode.com/problems/add-two-numbers-ii/

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9.
// l2: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9.
