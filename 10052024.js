// Return the domain name of a URL.

function domainName(url) {
  if (url.startsWith("http://")) {
    url = url.slice(7);
  } else if (url.startsWith("https://")) {
    url = url.slice(8);
  }

  if (url.startsWith("www.")) {
    url = url.slice(4);
  }

  const domain = url.split(".")[0];

  return domain;
}

console.log(domainName("google.com"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
console.log(domainName("buy.cars.com"), "buy.cars");

// url: string. 1 <= url.length <= 100. Lowercase English letters and symbols. Always a valid URL.
// Return the domain of the website.
