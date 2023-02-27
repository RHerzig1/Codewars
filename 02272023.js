// Write a binary search algorithm to find the first bad version of a program.

function solution(isBadVersion) {
  return function (n) {
    let left = 0;
    let right = n;

    while (left < right) {
      const middle = left + Math.floor((right - left) / 2);

      if (isBadVersion(middle)) {
        right = middle;
      } else left = middle + 1;
    }
    return left;
  };
}
