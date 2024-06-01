// Write a function that returns true if a root-to-tree path in a binary tree equals targetSum.

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let isTargetSum = false;

  // Null root edge case.
  if (!root) {
    return isTargetSum;
  }

  // IIFE for depth-first search.
  (function bfs(root: TreeNode | null, targetSum: number): void {
    targetSum = targetSum - root.val;

    // Continue down left child.
    if (root.left) {
      bfs(root.left, targetSum);
    }

    // Continue down right child.
    if (root.right) {
      bfs(root.right, targetSum);
    }

    // End of root-to-leaf path.
    if (!root.left && !root.right) {
      isTargetSum = targetSum === 0 || isTargetSum;
    }
  })(root, targetSum);

  return isTargetSum;
}

// console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22), true);
// console.log(hasPathSum([1, 2, 3], 5), false);
// console.log(hasPathSum([], 0), false);
// https://leetcode.com/problems/path-sum/

// root: TreeNode | null. 0 <= number of nodes <= 5000. -1000 <= Node.val <= 1000.
// targetSum: number. -1000 <= targetSum <= 1000.
// Return true if the sum of nodes of any root-to-leaf path of the binary tree equal the targetSum.

// Use a depth-first search algorithm.
// Recursively check each node. Subtract the node value from the targetSum.
// If the targetSum is 0 at the end of the branch, return true.
