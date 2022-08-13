// Create a secret holding factory function
// Write a function that accepts any value as a secret and returns an object containing a getSecret method (returns the secret) and setSecret method (assigns the secret value).

function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret
    },
    setSecret: function(value) {
      secret = value
    }
  }
}

// The parameter is an integer.
// Return the two methods.
// To write a factory function, write return {} as the statment body.
// Inside the curly braces, write the two methods as directed.