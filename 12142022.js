// Provided a string of words, return a Boolean indicating whether another string could be created

function ransomNote(note, magazine) {
  const noteArr = note.split(' ')
  const magazineArr = magazine.split(' ')

  // for (let i = 0; i < noteArr.length; i++) {
  //   const wordIndex = magazineArr.indexOf(noteArr[i])
  //   if (wordIndex >= 0) {
  //     magazineArr.splice(wordIndex, 1)
  //   }
  //   else return false
  // }
  // return true

  const noteMap = {}
  const magazineMap = {}

  for (const word of magazineArr) {
    magazineMap[word] = magazineMap[word] + 1 || 1
  }

  for (const word of noteArr) {
    if (magazineMap[word]) {
      magazineMap[word] = magazineMap[word] - 1
      if (magazineMap[word] < 0) return false
    }
    else return false
  }
  
  return true
}

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)

// Two string of words. Seperated by spaces. Ignore capitalization. Never empty.
// Return true if the 1st string can be created using words from the 2nd string.

// Iterate through the note.
// If magazine contains the word, remove it from magazine.
// Else, return false.
// Return true.