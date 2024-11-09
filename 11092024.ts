// Find the kth distinct string in an array.

function kthDistinct(arr: string[], k: number): string {
  // Declare the countMap.
  const countMap = new Map<string, number>();

  // Count the occurance of each string.
  for (const string of arr) {
    countMap.set(string, (countMap.get(string) || 0) + 1);
  }

  // Find the kth distinct string.
  for (const string of arr) {
    if (countMap.get(string) === 1) {
      k--;
    }

    if (!k) {
      return string;
    }
  }

  return "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2), "a");
console.log(kthDistinct(["aaa", "aa", "a"], 1), "aaa");
console.log(kthDistinct(["a", "b", "a"], 3), "");
// https://leetcode.com/problems/kth-distinct-string-in-an-array/

// arr: string[]. 1 <= arr.length <= 1000. 1 <= arr[i].length <= 5. arr[i] consists of lowercase English letters.
// k: number[]. 1 <= k <= 1000.
// Return the kth distinct string in an array. If no result exists, return an empty string.
