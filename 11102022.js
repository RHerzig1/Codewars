// Remove vowels from a string

function disemvowel(str) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  return [...str].filter(elem => !vowels.includes(elem)).join('')
}