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

function isPalindrome(head: ListNode | null): boolean {
  let leftToRightString = "";
  let rightToLeftString = "";
  let current = head;

  while (current) {
    leftToRightString += current.val;
    rightToLeftString = current.val + rightToLeftString;
    current = current.next;
  }
  return leftToRightString === rightToLeftString ? true : false;
}

// console.log(isPalindrome([1, 2, 2, 1]), true);
// console.log(isPalindrome([1, 2]), false);
// https://leetcode.com/problems/palindrome-linked-list/

// head: ListNode | null. Head of a linked list. 1 <= length <= 10^5. 0 <= Node.val <= 9.
// Return a Boolean indicating whether or not the linked list is a palindrome.

// Iterate through each node. Cache each value in an array.
// Determine whether the array is a palindrome.
// Return the result.
