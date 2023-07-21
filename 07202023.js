// Write a function that counts the lowercase letters of two strings and generates a string based off the results.

function mix(str1, str2) {
  const str1Count = {};
  const str2Count = {};
  let result = [];

  for (const char of str1) {
    if (char >= "a" && char <= "z") {
      str1Count[char] = str1Count[char] + 1 || 1;
    }
  }

  for (const char of str2) {
    if (char >= "a" && char <= "z") {
      str2Count[char] = str2Count[char] + 1 || 1;
    }
  }

  const keys = Object.keys(str1Count)
    .concat(Object.keys(str2Count))
    .filter((elem, index, arr) => arr.indexOf(elem) === index);

  for (const elem of keys) {
    if (str1Count[elem] > 1 && str2Count[elem] > 1) {
      if (str1Count[elem] > str2Count[elem]) {
        result.push(["1", elem.repeat(str1Count[elem])]);
      } else if (str1Count[elem] < str2Count[elem]) {
        result.push(["2", elem.repeat(str2Count[elem])]);
      } else {
        result.push(["=", elem.repeat(str1Count[elem])]);
      }
    } else if (str1Count[elem] > 1) {
      result.push(["1", elem.repeat(str1Count[elem])]);
    } else if (str2Count[elem] > 1) {
      result.push(["2", elem.repeat(str2Count[elem])]);
    }
  }

  result = result.sort((a, b) => {
    if (b[1].length !== a[1].length) {
      return b[1].length - a[1].length;
    } else if (a[0][0] !== b[0][0]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    } else {
      return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    }
  });

  return result.map((elem) => elem.join(":")).join("/");
}

console.log(mix("aaaa bb c", "aaa bbb c d D") === "1:aaaa/2:bbb");
console.log(
  mix("Are they here", "yes, they are here") === "2:eeeee/2:yy/=:hh/=:rr"
);
console.log(
  mix("looping is fun but dangerous", "less dangerous than coding") ===
    "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
);

// Parameters are two valid strings that may contain uppercase letters, lowercase letters, spaces, and symbols.
// Return a string indicating from which parameter each letter has the highest count.
// Include only lowercase letters with a count greater than 1 in at least one parameter.
// The stynax is: str#:char/str#:char.
// Repeat char as many times as the character appears in the more common string.
// Sort in decreasing order of length.
// If lengths are the same, sort in ascending lexicographic order.

// Declare 3 caches for str1, str2, str3.
// Iterate through both parameters and count the characters in the cache.
// Iterate through both caches and, whichever has the greatst count (and count is greater than 1), add to the final cache.
// Convert the final the final cache into an array of pairs.
// Sort and format.
// Return.
