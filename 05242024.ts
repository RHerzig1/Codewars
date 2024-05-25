// Write a function that returns the lowest common ancestor of a binary search tree.

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  const parent = root.val;
  const a = p.val;
  const b = q.val;

  if (a > parent && b > parent) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (a < parent && b < parent) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
}

// console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8), 6);
// console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4), 2);
// console.log(lowestCommonAncestor([2, 1], 2, 1), 2);
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// root: TreeNode | null. 2 <= number of nodes <= 10^5. -10^9 <= Node.val <= 10^9. All Node.val are unique.
// p: TreeNode | null. Valid node in root.
// q: TreeNode | null. Valid node in root. Does not equal p.
// Return the lowest common ancestor of p and q, within root.

// https://www.youtube.com/watch?v=E36O5SWp-LE
// Use a binary search and depth-first search algorithm.
// If the children are both less than the parent, move into the left tree.
// If the children are both more than the parent, move into the right tree.
// If the childen are on different sides, or the parent is one of the children, then return the parent node.