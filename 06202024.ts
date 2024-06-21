// Comapare a long pressed string to a target string.

function isLongPressedName(name: string, typed: string): boolean {
  let a = 0;
  let b = 0;
  let charA = name[a];
  let charB = typed[b];

  // First characters must always match.
  if (charA !== charB) {
    return false;
  }

  // Iterate the pointers through the strings.
  while (a < name.length) {
    charA = name[a++];
    charB = typed[b++];

    // Iterate b until the chars match, or charB changes value.
    while (charA !== charB) {
      const newCharB = typed[b++];

      // The chars match. Continue iterating.
      if (newCharB === charA) {
        break;
      }

      // CharB is no longer current, nor does it match charA.
      if (newCharB !== charB) {
        return false;
      }

      // b exceeds string length.
      if (b >= typed.length) {
        return false;
      }
    }
  }

  // Continue iterating b to check for invalid trailing values.
  while (b < typed.length) {
    const newCharB = typed[b++];

    // Make charA invalid if it no longer matches newCharB.
    if (newCharB !== charA) {
      charA = "X";
    }

    // Trailing characters must match charB or charA to be valid.
    if (newCharB !== charB && newCharB !== charA) {
      return false;
    }
  }

  return true;
}
console.log(isLongPressedName("abc", "aaaabbbbc"), true);
console.log(isLongPressedName("aaaabbbbc", "abc"), false);
console.log(isLongPressedName("aabbc", "aaabbbbcc"), true);
console.log(isLongPressedName("aabbc", "aaabbbbccbc"), false);
// https://leetcode.com/problems/long-pressed-name/

// name: string. 1 <= name.length <= 1000. Lower case characters.
// typed: string. 1 <= name.length <= 1000. Lower case characters.
// Return true if the name is accurate, aside from long pressed letters (multiple letters in a row).

// Declare two pointers.
// If typed[b] !== name[a], increment b until typed[b] changes value. If it still doesn't match, return false.
// After reaching the end of name, increment b to search for extra values.
