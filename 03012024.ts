// Write a function that reverses the order of a linked list.

// Definition for singly-linked list.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Iterative method:
// function reverseList(head: ListNode | null): ListNode | null {
//   let [prev, curr, next]: [ListNode | null, ListNode | null, ListNode | null] = [null, head, null];

//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// }

// Recursive method:
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let newHead: ListNode | null = head;

  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}

// console.log(reverseList([1,2,3,4,5]), [5,4,3,2,1]);
// console.log(reverseList([1,2]), [2,1]);

// head: ListNode. The head of a singly linked list. 0 <= number of nodes <= 5000. -5000 <= Node.val <= 5000
// Return the reversed list.

// https://www.youtube.com/watch?v=G0_I-ZF0S38
