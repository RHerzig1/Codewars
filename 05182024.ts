// Write a function that inverts a binary tree.

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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const left = root.left;
  const right = root.right;

  root.left = right;
  root.right = left;

  invertTree(left);
  invertTree(right);

  return root;
}

// https://leetcode.com/problems/invert-binary-tree/description/

// root: TreeNode | null. 1 <= tree.length <= 100. -100 <= Node.val <= 100.
// Return the root of the tree after the nodes have been inverted.

// Use breadth first search.