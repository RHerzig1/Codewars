// Write a function the removes the anchor (#) from a url.

function removeUrlAnchor(url){
  const index = url.indexOf('#');
  return index > 0 ? url.slice(0, index) : url;
}

console.log(removeUrlAnchor('example.com#about'), 'example.com')
console.log(removeUrlAnchor('example.com'), 'example.com')

// A string representing a url. It may contain an anchor (#).
// Return the string with the anchor and everything after it removed.

// Use indexOf() to find the index of the anchor.
// If the index is > 0, slice it off. Otherwise just return the url.