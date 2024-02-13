// Write a function that groups an array of strings by anagrams.

function groupAnagrams(strs: string[]): string[][] {
  const hashMap = new Map<string, any>();

  for (const str of strs) {
    const hash = compileHash(str);

    if (hashMap.has(hash)) {
      hashMap.set(hash, hashMap.get(hash).concat(str));
    } else {
      hashMap.set(hash, [str]);
    }
  }

  return [...hashMap.values()];
}

function compileHash(str: string): string {
  const hash: number[] = new Array(26).fill(0);

  for (const char of str) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    hash[index]++;
  }

  return String(hash);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(groupAnagrams([""]), [[""]]);
console.log(groupAnagrams(["a"]), [["a"]]);

// strs: string[]. 1 <= strs.length <= 104. 0 <= strs[i].length <= 100. strs[i] consists of lowercase English letters.
// Return string[][] of anagrams grouped together. They can be in any order.

// Declare a hashMap for the count of each character.
// Iterate the parameter. Sort the characters and store the count and index.
// Group the making counts in an array of arrays and return.
