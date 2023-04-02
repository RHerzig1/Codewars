// Write a recursive algorithm that returns the root-to-leaf paths of a binary tree.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function minDepth(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [String(root.val)];

  const subpaths = [...binaryTreePaths(root.left), ...binaryTreePaths(root.right)];
  return subpaths.map(path => `${root.val}->${path}`);
};

// A binary tree.
// Return an array containing all the root-to-leaf paths of a binary in any order.

// Conditional cases:
// If there is no node, return an empty array.
// If there is a node, return its value.

// Recursive case:
// Build the paths from the left and right children inside an array.
// Map through the array and add the root node and an arrow.