// Return a count of nodes that equal the average subtree value.

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

function averageOfSubtree(root: TreeNode | null): number {
  let result = 0;

  // Preorder DFS traversal.
  (function dfs(node: TreeNode | null): number[] {
    if (!node) {
      return [0, 0];
    }

    const [leftCount, leftSum] = dfs(node.left);
    const [rightCount, rightSum] = dfs(node.right);

    const currentCount = leftCount + rightCount + 1;
    const currentSum = leftSum + rightSum + node.val;
    const currentAverage = Math.floor(currentSum / currentCount);

    if (currentAverage === node.val) {
      result++;
    }

    return [currentCount, currentSum];
  })(root);

  return result;
}

// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/

// root: TreeNode | null. 1 <= number of nodes <= 1000. 0 <= node.val <= 1000.
// Return the number of nodes that equal the average value of the nodes below them (including the current node). Round the average to the nearest integer.
