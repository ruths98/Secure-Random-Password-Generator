// Assignment code here
let upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
let lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
let numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
let specialCharacters = ['\"', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', '=', '[', ']', '^', '_', '{', '}', '~',];

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
let password = generatePassword();//the generate password function. I think.
let passwordText = document.querySelector("#password");//this is the text displayed at the end. The final password created.
passwordText.value = password;//the generate password function will end up being the text displayed in the box. Is 'password' causing the +1 overload?

function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt('How many characters would you like your password to have?'), 
  );
console.log(passwordLength);
  if (Number.isNaN(passwordLength)) {
    alert('Password length must be provided as a number');
    return null;
  }
  if (passwordLength < 8) {
    alert('Password must contain at least 8 characters');
    return null;
  }
  if (passwordLength > 128) {
    alert('Password must contain less than 129 characters.');
    return null;
  }

  let hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  let hasNumericCharacters = confirm(
    'Click okay to confirm including numeric characters.'
  );

  let hasLowerCaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  let hasUpperCaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if(!hasSpecialCharacters &&
    !hasNumericCharacters  &&
    !hasLowerCaseCharacters &&
    !hasUpperCaseCharacters ){
    alert('At lease one character type must be allowed');
    return null;

  }

let passwordOptions = {
  passwordLength: passwordLength,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCaseCharacters: hasLowerCaseCharacters,
  hasUpperCaseCharacters: hasUpperCaseCharacters,
};

return passwordOptions;
}

function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  let options = getPasswordOptions();
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if (!options) return null;//if no character options are selected, no password will be made.

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  } 
  console.log(possibleCharacters);
  console.log(guaranteedCharacters);
  for (let i=0; i< options.passwordLength; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
    console.log(possibleCharacter);
  }
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result.push(guaranteedCharacters[i]);
  }

  return result.join('');
}

// function writePassword() {
//   let password = generatePassword();
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// document.getElementById("generate").addEventListener("click",writePassword);