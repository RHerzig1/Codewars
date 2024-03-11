// Write a function that reverses the order of a linked list.

function reverseList(head: ListNode | null): ListNode | null {
  let next: ListNode | null = head?.next;
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;

  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }

  return prev;
}

// console.log(reverseList([1,2,3,4,5]), [5,4,3,2,1]);
// console.log(reverseList([1,2]), [2,1]);
// https://leetcode.com/problems/reverse-linked-list/

// head: ListNode. The head of a singly linked list. 0 <= number of nodes <= 5000. -5000 <= Node.val <= 5000
// Return the reversed list.

// https://www.youtube.com/watch?v=G0_I-ZF0S38
