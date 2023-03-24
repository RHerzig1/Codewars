// Write a recursive function that inverts the nodes of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function inorderTraversal(root) {
  if(!root) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

// A binary tree.
// Return the inverted binary tree.

// Conditional cases:
// If there is no node, return null

// Recursive case:
// Reassign root.left and root.left to the inverted results of invertTree.
