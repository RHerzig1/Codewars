// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words.

var makeBackronym = function(string){
  let arr = string.toUpperCase().split('');
  arr = arr.map((elem) => elem = dict[elem]);
  return arr.join(' ');
}

makeBackronym("dgm")

// P: A string of random letters, no spaces.
// R: A string of words, each one beginning with a letter from the provided string.
// E: "dgm" -> "disturbing gregarious mustache"
// P: Take the string of random letters and split('') it so each letter is an element of an array. Then use the map() method to replace each letter into a word by assigning it the value of dict['letter']. Then join(' ') the array and return it.

// https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript