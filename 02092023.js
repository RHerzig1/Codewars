// Write a recursive function that checks whether two binary trees are identical

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function checkBinaryTree(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// Two binary trees.
// Return a boolean indicating whether they're identical.

// Conditional cases:
// If both nodes are undefined, return true.
// If one node is undefined, or the nodes don't share the same value, return false.

// Recursive case:
// Call isSameTree() searching the left and right branches.