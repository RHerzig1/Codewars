// Return Boolean indicating anagram parameters

function isAnagram(test, original) {
  test = test.toLowerCase().split('').sort().join('')
  original = original.toLowerCase().split('').sort().join('')
  return test === original
}