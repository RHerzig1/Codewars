// Write a recursive algorithm that returns the minimum depth of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function minDepth(root) {
  if (!root) return 0;

  let left = minDepth(root.left) + 1;
  let right = minDepth(root.right) + 1;

  if (!root.left) return right;
  if (!root.right) return left;

  return Math.min(left, right);
};

// A binary tree.
// Return an integer indicating the minimum depth of the tree.

// Conditional cases:
// If there is no node, return 0

// Recursive case:
// Call minDepth() searching the left and right branches.
// If a branch doesn't exist, don't return it.
// Count the nodes by returning 1 plus the branches.