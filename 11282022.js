// Create a social media hashtag generator

function generateHashtag (str) {
  str = str.trim()
  if (str === '') return false
  
  let result = []
  for (let word of str.split(' ')) {
    if (word !== '') result.push(word)
  } 
  result = result.map(word => word[0].toUpperCase() + word.slice(1)).join('')

  if (result.length >= 140) return false
  
  return '#' + result
}

console.log(generateHashtag('hello world')) // #HelloWorld