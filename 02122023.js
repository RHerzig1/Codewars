// Write a recursive function that checks whether a binary tree is balanced.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function isBalanced(root) {
  if (!root) return true

  let left = isBalanced(root.left)
  if (left === false) return false

  let right = isBalanced(root.right)
  if (right === false) return false

  if (Math.abs(left - right) > 1) return false

  return 1 + Math.max(left, right)
}

// A binary tree.
// Return true or false indicating whether the tree is balanced.

// Conditional cases:
// If there is no node, return true

// Recursive case:
// // Call isBalanced() searching the left and right branches.
// If the left or right branch is false, keep returning false.
// If the difference between the left and right branches are false, return false.
// Count the nodes by returning 1 plus the deepest branch.