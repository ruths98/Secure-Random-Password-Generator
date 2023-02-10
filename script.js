// Assignment code here
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialCharacters = "\"!#$%&'()*+-,/:;=[]^_{}~";

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let length = window.prompt("how many characters would you like your password to contain?");
 

  if (length = null) {
    alert("Password length must be provided as a number.");
    return null;
  }
  else if (length < 8) {
    alert("Password must contain at least 8 characters");
    return null;
  }
  else if (length > 128) {
    alert("Password must contain less than 129 characters.");
    return null;
  } 



  let hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  let hasNumericCharacters = confirm(
    'Click okay to confirm including numeric characters.'
  );

  let hasLowerCaseCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  let hasUpperCaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    ); {
    alert('At lease one character type must be allowed');
    return null;
  }



let password = "";
while (password.length < length) {
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));

  if (password.length == length) break;
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));

  if (password.length == length) break;
  password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));

  if (password.length == length) break;
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
}
password = shuffleWord(password);
return password;
}

function shuffleWord(word) {
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord += word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
