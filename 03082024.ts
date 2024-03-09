// Write a function that returns whether or not a linked list is a palindrome.

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

function isPalindrome(head: any): boolean {
  const vals: number[] = [];

  let curr = head;

  while (curr) {
      vals.push(curr.val);
      curr = curr.next
  }

  for (let i = 0; i <= vals.length / 2; i++) {
      if (vals[i] !== vals[vals.length - i - 1]) {
          return false;
      }
  }

  return true;
};

// console.log(isPalindrome([1, 2, 2, 1]), true);
// console.log(isPalindrome([1, 2]), false);
// https://leetcode.com/problems/palindrome-linked-list/

// head: ListNode | null. Head of a linked list. 1 <= length <= 10^5. 0 <= Node.val <= 9.
// Return a Boolean indicating whether or not the linked list is a palindrome.

// Iterate through each node. Cache each value in an array.
// Determine whether the array is a palindrome.
// Return the result.