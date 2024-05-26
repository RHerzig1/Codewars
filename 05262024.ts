// Write a function that returns the values from the right-side view of a binary tree.

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

function rightSideView(root: TreeNode | null): number[] {
  const queue = [root];
  const result: number[] = [];

  while (queue[0]) {
    const currDepth = queue.length;
    let currValues: number[] = [];

    // Iterate the current set of nodes in the queue (from queue[0] to queue[currDepth]).
    for (let i = 0; i < currDepth; i++) {
      // Remove queue[0] and assign it to node.
      const node = queue.shift();

      // Push the node value into currValues.
      currValues.push(node.val);

      // Push the left child into the queue.
      if (node.left) {
        queue.push(node.left);
      }

      // Push the right child into the queue.
      if (node.right) {
        queue.push(node.right);
      }
    }

    // currValues contains all values from the current level. Push the "right-most" value into result.
    result.push(currValues.at(-1));
  }

  return result;
}

// console.log(levelOrder([1, 2, 3, null, 5, null, 4]), [1, 3, 4]);
// console.log(levelOrder([1, null, 3]), [1, 3]);
// console.log(levelOrder([]), []);
// https://leetcode.com/problems/binary-tree-right-side-view/

// root: TreeNode | null. 0 <= number of nodes <= 100. -100 <= Node.val <= 100.

// Use a breadth-first search algorithm to queue each level.
// Use the queue to add the right-most node of each level into a results array.
