// Write a function that returns a count of the good nodes in a binary tree.

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

function goodNodes(root: TreeNode | null): number {
  let count = 0;

  // Depth-first search recursive IIFE. Passing in currMax as a parameter localizes it to each branch.
  (function dfs(node: TreeNode | null, currMax: number): number {
    if (!node) {
      return 0;
    }

    currMax = Math.max(currMax, node.val);

    if (node.val >= currMax) {
      count++;
    }

    dfs(node.left, currMax);
    dfs(node.right, currMax);
  })(root, root.val);

  return count;
}

// console.log(goodNodes([3, 1, 4, 3, null, 1, 5]), 4);
// console.log(goodNodes([3, 3, null, 4, 2]), 3);
// console.log(goodNodes([1]), 1);
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 100. -100 <= Node.val <= 100.
// Return a count of good nodes. A node is good if it's equal or greater than all nodes upstream (towards the root).

// Use a depth-first search algorithm to travel down each branch.
// Write a second function to track the maximum value of the current branch.
