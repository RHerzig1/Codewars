// Write a function that returns the diameter of a binary tree.

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  (function dfs(root: TreeNode | null): number {
    if (!root) {
      return -1;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    result = Math.max(result, 2 + left + right);

    return 1 + Math.max(left, right);
  })(root);

  return result;
}

// console.log(diameterOfBinaryTree([1,2,3,4,5]), 3);
// console.log(diameterOfBinaryTree([1,2]), 1);

// https://leetcode.com/problems/diameter-of-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return a number indicating the maximum diameter of the binary tree.
// The diameter of a binary tree indicates the longest possible path. It does not need to pass through the root node.

// Use a depth-first search algorithm.
// https://www.youtube.com/watch?v=bkxqA8Rfv04
