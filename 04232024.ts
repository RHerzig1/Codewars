// Write a function that compares two strings, with backspaces, using stacks.

function backspaceCompare(s: string, t: string): boolean {
  const stackS: string[] = [];
  const stackT: string[] = [];

  for (let i = 0; i <= Math.max(s.length, t.length); i++) {
    if (s[i] === "#") {
      stackS.pop();
    } else {
      stackS.push(s[i]);
    }

    if (t[i] === "#") {
      stackT.pop();
    } else {
      stackT.push(t[i]);
    }
  }

  return stackS.join("") === stackT.join("");
}

console.log(backspaceCompare("ab#c", "ad#c"), true);
console.log(backspaceCompare("ab##", "ad#c"), true);
console.log(backspaceCompare("a#c", "b"), false);

// s: string. Consists of lowercase letters and '#'. 1 <= s.length <= 200.
// t: string. Consists of lowercase letters and '#'. 1 <= t.length <= 200.
// Return true or false whether then final strings are equal. The '#' character represents a backspace.

// Use two stacks.
// Join and compare the stacks.
