// Write a wrapper function that caches the results of an API call.

function cache(func) {
  const cache = {}; 
  return (...arguments) => { 
    let args = JSON.stringify(...arguments); 
    return cache.hasOwnProperty(args) ? cache[args] : cache[args] = func(...arguments);
  }
}