// Write an function that returns true or false whether a string is a palindrome.

export function isPalindrom(str: string): Boolean {
  str = str.toUpperCase();
  let indexA: number = 0;
  let indexB: number = str.length - 1;

  while (indexA < indexB) {
    if (str[indexA] !== str[indexB]) {
      return false;
    }

    indexA++;
    indexB--;
  }

  return true;
};

console.log(isPalindrom('racecar'), true);
console.log(isPalindrom('Racecar'), true);
console.log(isPalindrom('Trackcar'), false);
console.log(isPalindrom(''), true);

// str: string. 0 <= str.length <= 100. May contain upper or lower case characters. Will not containg numbers or symbols.
// Return a Boolean indicating whether or not the string is a palindrome.

// Use the two-pointer technique to compare characters on opposite ends of the string.
// If they don't match, return false immediately.
// If they all match, return true.