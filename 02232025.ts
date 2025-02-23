// Return true if all binary search tree leaves are at the same depth.

function allLeavesAtSameLevel(root) {
  // Edge case for empty root node
  if (!root) {
    return true;
  }

  const depths = new Set();

  // Recursive DFS IIFE to count the levels of each leaf
  (function maxDepth(node, depth) {
    const left = node.getLeft();
    const right = node.getRight();

    if (left) {
      maxDepth(node.getLeft(), depth + 1);
    }

    if (right) {
      maxDepth(node.getRight(), depth + 1);
    }

    if (!left && !right) {
      depths.add(depth);
      return undefined;
    }
  })(root, 0);

  return depths.size === 1;
}

// https://www.codewars.com/kata/52d43d5515be7cbc92000611

// node: Node of a binary search tree.
// Return true if all leaves end at the same level/depth, or false if they do not.
