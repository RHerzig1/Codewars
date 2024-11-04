// Calculate the sum of binary tree nodes between two values.

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum = 0;

  // Recursive solution.
  (function DFS(node: TreeNode | null): void {
    // Assess the value and increment sum.
    if (low <= node.val && node.val <= high) {
      sum += node.val;
    }

    const left = node.left;
    const right = node.right;

    if (left) {
      DFS(left);
    }

    if (right) {
      DFS(right);
    }
  })(root);

  return sum;
}

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15), 32);
console.log(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10), 23);
// https://leetcode.com/problems/range-sum-of-bst/

// root: TreeNode | null. 1 <= number of nodes <= 2*10^4. 1 <= Node.val <= 10^5.
// low: number. 1 <= low <= high.
// high: number. low <= high <= 10^5.
// Return the sum of node values where: low >= nod.val <= high.
