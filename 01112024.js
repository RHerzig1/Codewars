// Write a function that fixes a security flaw in an application login system.

function validate(username, password) {
  const database = new Database();

  if (password.includes("//") || password.includes("||")) {
    return "Wrong username or password!";
  }

  return database.login(username, password);
}

console.log(validate("Timmy", "password"), "Successfully Logged in!");
console.log(validate("Timmy", "h4x0r"), "Wrong username or password!");
console.log(validate("Alice", "alice"), "Successfully Logged in!");
console.log(validate("Timmy", 'password"||""=="'), "Wrong username or password!");
console.log(validate("Admin", 'gs5bw"||1==1//'), "Wrong username or password!");

// The password should automatically be wrong if it includes '//' or '||'.