// String encryption
// When provided string and a number, encrypt thte string by concatenating all even indexes and all odd indexes, and repeat the specificied number of times.
// Provide another function that reverses the encryption. 

function encrypt(text, n) {
  if (!text || n <= 0) return text
  
  text = Array.from(text)
 
  for (let i = 0; i < n; i++) {
    const odd = text.filter((elem, index) => index % 2 === 1)
    const even = text.filter((elem, index) => index % 2 === 0)
    text = odd.concat(even)
  }
  return text.join('')
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText
    
  const ans = new Array(encryptedText.length)

  while (n--) {
    let j = 0
    
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++]
    }
    
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++]
    }
    
    encryptedText = ans.join('')
  }
  return encryptedText
}

// Parameters are a string and a number.
// Return a string.
// If n <= 0, return text unmodified.
// Split text into an array.
// Create a for loop that iterates while i < n.
// Delcare an odd variable that filters all the odd indexed elements.
// Declare an even variable that filters all the even indexed elements.
// Replace the string with the concatenation of the odd and even variables.
// Return the string.