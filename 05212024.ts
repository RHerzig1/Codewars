// Write a function that returns whether a binary tree is height-balanced.

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

/*
function isBalanced(root) {
  if (!root) {
    return true;
  }

  const left = isBalanced(root.left);
  if (!left) {
    return false;
  }

  const right = isBalanced(root.right);
  if (!right) {
    return false;
  }

  if (Math.abs(left - right) > 1) {
    return false;
  }

  return 1 + Math.max(left, right);
}
*/

function isBalanced(root: TreeNode | null): boolean {
  let result = true;

  // Recursively check the height difference between child nodes.
  // If the height difference is ever > 1, result becomes false and the function skips checking for height differences.
  (function dfs(root: TreeNode | null): number {
    if (!result || !root) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    const heightDifference = Math.abs(left - right);

    if (heightDifference > 1) {
      result = false;
    }

    return 1 + Math.max(left, right);
  })(root);

  return result;
}

// console.log(isBalanced([3,9,20,null,null,15,7]), true);
// console.log(isBalanced([1,2,2,3,3,null,null,4,4]), false);
// console.log(isBalanced([]), true);
// https://leetcode.com/problems/balanced-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 5000. -10^4 <= Node.val <= 10^4.
// Return a Boolean indicating whether the binary tree is height-balanced. It's true if the depth of two subtrees is never more than one.
