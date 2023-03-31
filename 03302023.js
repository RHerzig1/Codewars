// Write a recursive function that returns the postorder traversal of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function postorderTraversal(root) {
  if (!root) return [];
  return [
    ...postorderTraversal(root.left) || null,
    ...postorderTraversal(root.right) || null,
    root.val,
  ];
}

// A binary tree.
// Return an array containing the preorder values. Start from the left and move to the right then root.

// Conditional cases:
// If there is no node, return an array.

// Recursive case:
// Return the values as part of the array.
