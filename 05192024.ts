// Write a function that returns the maximum depth of a binary tree.

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

// Depth-first Search (recursion)
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const count = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  return count;
}

// Depth-first Search (iterative)
function maxDepth(root: TreeNode | null): number {
  const stack: [TreeNode | null, number][] = [[root, 1]];
  let result = 0;

  while (stack.length > 0) {
    const [node, depth] = stack.pop();

    if (node) {
      result = Math.max(result, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return result;
}

// Breadth-first search
function maxDepth(root: TreeNode | null): number {
  let depth = 0;
  let queue = [root];

  while (queue[0]) {
    const currDepth = queue.length;

    for (let i = 0; i < currDepth; i++) {
      const node = queue.shift();

      if (node && node.left) {
        queue.push(node.left);
      }

      if (node && node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= tree.length <= 10^4. -100 <= Node.val <= 100.
// Return a number representing the maximum depth of the tree.
