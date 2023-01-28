// Write an algorithm that validates a string.

function validateString(string){
  if (string.trim() !== string) return false
  if (string === '') return false

  for (const char of string) {
    if (char === ' ') return false;
    else if (char.toLowerCase() !== char.toUpperCase()) continue;
    else if (isNaN(char) === false) continue;
    else return false
  }
  return true
}

console.log(validateString('HelloWorld'), true)
console.log(validateString('Hello World'), false)
console.log(validateString('HelloWorld123'), true)
console.log(validateString('HelloWorld!'), false)
console.log(validateString('   '), false)
console.log(validateString(''), false)

// A string containing different characters, including uppercase and lowercase letters and numbers. There may be spaces, puncuation, or other characters.
// Return true if the string only contains letters and/or numbers. Return false if it's empty or contains spaces or puncuation.