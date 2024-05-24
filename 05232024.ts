// Write a function that returns whether a binary tree is a subtree of another.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  
}

console.log(isSubtree([3, 4, 5, 1, 2], [412]), true);
console.log(isSubtree([3, 3, 4, 5, 1, , 2, null, null, null, null, 0], [4, 1, 2]), false);
// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= number of nodes <= 2000. -10^-4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= number of nodes <= 1000. -10^-4 <= Node.val <= 10^4.
// Return a Boolean indicating whether or not subRoot is a subtree of root. It must have the same structure and node values to be true, including children (or lack of).
