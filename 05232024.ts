// Write a function that returns whether two binary trees are identical.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  }

  const compareNode = p.val === q.val;
  const compareLeftChild = isSameTree(p.left, q.left);
  const compareRightChild = isSameTree(p.right, q.right);

  return compareNode && compareLeftChild && compareRightChild;
}

console.log(isSameTree([1, 2, 3], [1, 2, 3]), true);
console.log(isSameTree([1, 2], [1, null, 2]), false);
console.log(isSameTree([1, 2, 1], [1, 1, 2]), true);
// https://leetcode.com/problems/same-tree/

// p: TreeNode | null. 0 <= number of nodes <= 100. -10^4 <= Node.val <= 10^4.
// q: TreeNode | null. 0 <= number of nodes <= 100. -10^4 <= Node.val <= 10^4.
// Return a Boolean indicating whether the two trees are identical. They are identical if they have the same structure and values.

// Use a depth-first algorithm.
