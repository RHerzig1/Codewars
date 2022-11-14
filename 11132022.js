// Replace vowels and characters

function vowelOne(s){
  const vowels = [...'aeiou']
  return s.toLowerCase().split('').map(elem => {
    if (vowels.includes(elem)) return 1
    return 0
  }).join('')
}