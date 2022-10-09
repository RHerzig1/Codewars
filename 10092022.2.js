// Extract the domain name from a URL

function domainName(url){
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
}

domainName('www.youtube.com')

// The parameter is a URL beginning.
// Return the domain name only.
// 'https://youtube.com' -> 'youtube'
// 'www.google.com' -> 'google'
// Use the replace method to remove the content before the domain.
// Split the string by '.' and return the first element.