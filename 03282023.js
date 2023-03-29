// Write an iterative algorithm that returns whether a binary tree is symmetrical.

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

function isSymmetric(root) {
  if (!root) return false

  const left = [root.left]
  const right = [root.right]

  while (left.length && right.length) {
      let nodeLeft = left.pop()
      let nodeRight = right.pop()

      if (!nodeLeft && !nodeRight) continue
      if (!nodeLeft || !nodeRight || nodeLeft.val !== nodeRight.val) return false

      left.push(nodeLeft.left, nodeLeft.right)
      right.push(nodeRight.right, nodeRight.left)
  }

  return true
}

// A binary tree.
// Return a boolean indicating whether the binary tree is symmetrical.

// Declare array for left and right side.
// Iterate through tree. Add nodes and check whether they match. If not, return false.
// Return true.