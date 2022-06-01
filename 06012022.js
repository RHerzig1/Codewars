// Given a number, respond with the corresponding phrase. Counts over the number of phrases loops back to the beginning.
// I love you
// a little
// a lot
// passionately
// madly
// not at all

function howMuchILoveYou(nbPetals) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]
  const baseNumber = (nbPetals - 1) % phrases.length
  return phrases[baseNumber]
}

// 1 parameter, a number > 0.
// Return the corresponding phrase.
// (6)-> "not at all"
// Add the phrases into an array called phrases
// Calculate the base number needed. Subtract nbPetals - 1 (to account for 0 indexing) % phrases.length.
// The returning number should be between 0 and 7. Simply return the index of that number from the array.

// https://www.codewars.com/kata/570e8ec4127ad143660001fd