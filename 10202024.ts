// Evaluate a boolean binary tree.

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

function evaluateTree(root: TreeNode | null): boolean {
  if (!root.left) {
    return root.val === 1 ? true : false;
  }

  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }

  if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }
}

// https://leetcode.com/problems/evaluate-boolean-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 1000. 0 <= Node.val <= 3. Every node has either 0 or 2 children.
// Value map:
//  0: false,
//  1: true,
//  2: 'OR',
//  3: 'AND'
// Return the conditional outcome of the binary tree using logic gates AND and OR.
