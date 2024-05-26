// Write a function that returns the values from each level of a binary tree.

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

function levelOrder(root: TreeNode | null): number[][] {
  const queue = [root];
  const result: number[][] = [];

  while (queue[0]) {
    const currDepth = queue.length;

    // Iterate the queue and push each node value into result. Performed once per level.
    result.push(queue.map((node) => node.val));

    // Iterate the current set of nodes in the queue (from queue[0] to queue[currDepth]).
    for (let i = 0; i < currDepth; i++) {
      const node = queue.shift();

      // Push the left child into a queue.
      if (node.left) {
        queue.push(node.left);
      }

      // Push the right child into a queue.
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}

// console.log(levelOrder([3, 9, 20, null, null, 15, 7]), [[3], [9, 20], [15, 7]]);
// console.log(levelOrder([1]), [[1]]);
// console.log(levelOrder([]), []);
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// root: TreeNode | null. 2 <= number of nodes <= 10^5. -10^9 <= Node.val <= 10^9. All Node.val are unique.

// Use a breadth-first search algorithm to queue each level.
// Use the queue to add each level into a results array.
