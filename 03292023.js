// Write a recursive function that returns the preorder traversal of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function preorderTraversal(root) {
  if (!root) return [];
  return [
    root.val,
    ...preorderTraversal(root.left) || null,
    ...preorderTraversal(root.right) || null,
  ];
}

// A binary tree.
// Return an array containing the preorder values. Start from the root and move from the left to the right.

// Conditional cases:
// If there is no node, return an array.

// Recursive case:
// Return the values as part of the array.
