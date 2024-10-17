// Convert a string to all lower case characters without toLowercase().

function toLowerCase(s: string): string {
  const lowerCaseArr: string[] = [];
  const UPPERCASE_TO_LOWERCASE_UNICODE_DIFFERENCE = 32;

  for (let char of s) {
      if (char >= "A" && char <= "Z") {
          char = String.fromCharCode(char.codePointAt(0)! + UPPERCASE_TO_LOWERCASE_UNICODE_DIFFERENCE);
      }

      lowerCaseArr.push(char);
  }

  return lowerCaseArr.join('');
};

// https://leetcode.com/problems/to-lower-case/

// s: string. 1 <= s.length <= 100. Consists of printable ASCII characters.
// Return the string after converting it to all lower case. Don't use the toLowercase() function.