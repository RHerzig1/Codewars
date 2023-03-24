// Write a recursive function that returns the inorder traversal of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function inorderTraversal(root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

// A binary tree.
// Return an array containing the inorder values, or left to right values.

// Conditional cases:
// If there is no node, return an array.

// Recursive case:
// Return the values as part of the array.
