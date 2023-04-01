// Write a recursive algorithm that creates a height-balanced binary search tree from an array.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2)
  const node = new TreeNode(nums[mid])

  node.left = sortedArrayToBST(nums.slice(0, mid))
  node.right = sortedArrayToBST(nums.slice(mid + 1))
  return node
}

// An array of nums in ascending order. May include null.
// Return a height-balanced binary tree.

// Conditional cases:
// If the array is empty, return null.

// Recursive case:
// Using the mid point as an index, create a new node at that point.
// Continue the process on the left and right side by slicing the arrray and calling it again.