// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var length = parseInt(prompt("Enter the length of the password between 8 and 128 characters, please."));
  var lowerCase = confirm("Include Lower Case letters?");
  var upperCase = confirm("Include Upper Case letters?");
  var numeric = confirm("Include numbers?");
  var confirmChars = confirm("Include special characters?");

  var types = [];
  var pass = [];

  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberString = "0123456789";
  var specialString = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

  var indexOfString = 0;
  var indexOfPassword = 0;

  if (lowerCase) {
    types.push(lowerCaseString);
  } if (upperCase) {
    types.push(upperCaseString);
  } if (numeric) {
    types.push(numberString);
  } if (confirmChars) {
    types.push(specialString);
  }

  for (i = 0; i < length; i++) {
    var randomType = types[Math.floor(Math.random() * types.length)];
    var random = randomType[Math.floor(Math.random() * randomType.length)];
    console.log(random);
    pass.push(random);
    console.log(pass);

  }
  var passString = pass.join("");
  return passString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
