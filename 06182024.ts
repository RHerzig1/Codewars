// Determine whether two strings are isomorphic.

function isIsomorphic(s: string, t: string): boolean {
  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // If sChar exists in sMap, it should be assigned tChar
    if (sMap.has(sChar) && sMap.get(sChar) !== tChar) {
      return false;
    }

    // If tChar exists in tMap, it should be assigned sChar
    if (tMap.has(tChar) && tMap.get(tChar) !== sChar) {
      return false;
    }

    // Cache char in each other's maps
    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }

  return true;
}

console.log(isIsomorphic("egg", "add"), true); // {e: [0], g: [1, 2]} === {a: 0, d: 2}
console.log(isIsomorphic("foo", "bar"), false); // {f: [0], o: [1, 2]} !== {b: [0], a: [1], r: [2]}
console.log(isIsomorphic("paper", "title"), true); // {p: [0, 2], a: [1], e: [3], r: [4]} === {t: [0, 2], i: [1], l: [3], e: [4]}

// s: string. 1 <= s.length <= 5*10^4. Consists of valid ASCII characters.
// t: string. t.length == s.length. Consists of valid ASCII characters.
// Return a Boolean whether the strings are isomorphic. This indicates if every occurance of each letter in s can be replaced to transform the string into t.
