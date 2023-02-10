// Write a recursive function that returns the maximum depth of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function maxDepth(root) {
  if (!root) return 0

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return 1 + Math.max(left, right)
};

// A binary tree.
// Return an integer indicating the depth of the tree.

// Conditional cases:
// If there is no node, return 0

// Recursive case:
// Call maxDepth() searching the left and right branches.
// Count the nodes by returning 1 plus the deepest branch.