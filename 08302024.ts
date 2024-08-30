// Convert a binary search tree into a greater sum tree.

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

function bstToGst(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  (function dfs(root: TreeNode | null) {
    if (!root) {
      return null;
    }

    dfs(root.right);
    sum += root.val;
    root.val = sum;

    dfs(root.left);
  })(root);

  return root;
}

// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
