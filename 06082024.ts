// Write a function that returns the total number of nodes in a Binary Tree.

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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let count = 1;

  (function dfs(root) {
    if (root.left) {
      count++;
      dfs(root.left);
    }

    if (root.right) {
      count++;
      dfs(root.right);
    }
  })(root);

  return count;
}

console.log(countNodes([1, 2, 3, 4, 5, 6]), 6);
console.log(countNodes([1]), 1);
console.log(countNodes([]), 0);
// https://leetcode.com/problems/count-complete-tree-nodes/

// root: TreeNode | null. 0 <= number of nodes <= 5*10^4. 0 <= 5*10^4.
// Return the total number of nodes.

// Use a DFS algorithm to calculate the total number of nodes.
