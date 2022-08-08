// Function composition
// In the provided string, calculate the alphabetical value of each consonant substring.

function compose(f, g) {
  return function() {
    return f(g.apply(this, arguments))
  }
}