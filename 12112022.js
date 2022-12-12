// Remove exclamation points at end of all words in string

function remove (string) {
  let arr = string.split(' ')
  arr = arr.map(elem => {
    elem = [...elem]
    while (elem[elem.length - 1] === '!') {
      elem.pop()
    }
    return elem.join('')
  })
  return arr.join(' ');
}