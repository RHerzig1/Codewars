// Return only the last argument.

function last(...args) {
  let lastArg = args.at(-1);

  if (typeof lastArg === 'string' && args.length === 1) {
    lastArg = lastArg.at(-1);
  } else if (Array.isArray(lastArg) && args.length === 1) {
    lastArg = lastArg.at(-1);
  }
    
  return lastArg;
}

// 1 or more arguments are passed.
// https://www.codewars.com/kata/541629460b198da04e000bb9