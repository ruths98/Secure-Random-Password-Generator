// Each array will have random characters pulled from it and added to the password.
let upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
let lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
let numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
let specialCharacters = ['\"', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', '=', '[', ']', '^', '_', '{', '}', '~',];

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
let password = generatePassword();//the generate password function. I think.
let passwordText = document.querySelector("#password");//this is the text displayed at the end. The final password created.
passwordText.value = password;//the generate password function will end up being the text displayed in the box. 

function getPasswordOptions() { //each line will determine which characters types will be included and how many total characters the password will be.
  let passwordLength = parseInt(//This converts the argument into a string and parses it
    prompt('How many characters would you like your password to have?'),
  );
  console.log(passwordLength); //this is to double check in the console to see if the data entered is being read properly.
  if (Number.isNaN(passwordLength)) {//If a non numerical character is entered, an error message will appear.
    alert('Password length must be provided as a number');
    return null;
  }
  if (passwordLength < 8) {//if the number typed in is less than 8, an error message will appear.
    alert('Password must contain at least 8 characters');
    return null;
  }
  if (passwordLength > 128) {//if the number typed in is over 128, the user will see an error message.
    alert('Password must contain less than 129 characters.');
    return null;
  }

  let hasSpecialCharacters = confirm( //click ok to allow special characters, cancel will disallow special character use in the password.
    'Click OK to confirm including special characters.'
  );

  let hasNumericCharacters = confirm(//pressing ok in the popup allows numeric characters in the password, cancel disallows them.
    'Click okay to confirm including numeric characters.'
  );

  let hasLowerCaseCharacters = confirm( //cancelling the popup will disallow lowercase character use in the password, pressing ok will allow lowercase character use.
    'Click OK to confirm including lowercase characters.'
  );

  let hasUpperCaseCharacters = confirm( //pressing ok will allow the use of capital letters and cancel will not allow them to be included in the password.
    'Click OK to confirm including uppercase characters.'
  );
//if user selects cancel for all popups, not allowing any character types to be used, no password will (or can) be created and an error message will fire.
  if (!hasSpecialCharacters &&
    !hasNumericCharacters &&
    !hasLowerCaseCharacters &&
    !hasUpperCaseCharacters) {
    alert('At lease one character type must be allowed');
    return null;

  }
//this is an object to store the data about what characters will be used.
  let passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
  };

  return passwordOptions;
}
//this randomly selects characters from the arrays.
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  let options = getPasswordOptions();
  let result = [];//result, possibleCharacters, and guaranteedCharacters will be random each time so they get empty brackets as they are not set to specific characters.
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if (!options) return null;//if no character options are selected, no password will be made.

  if (options.hasLowerCaseCharacters) {//if haslowercase characters returns true then random elements from the lowercase array will be added to the password.
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {//if hasUpperCaseCharacters returns true, random elements from the UpperCaseCharacters array will be selected.
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  if (options.hasNumericCharacters) {//if hasNumericCharacters returns true, random elements from the numericCharicters array will be selected.
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasSpecialCharacters) { //if hasSpecialCharacters returns true, random elements from the specialCharacters array will be selected.
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  console.log(possibleCharacters);//to see in console if possibleCharacters is logging properly.
  console.log(guaranteedCharacters);//to see in console if guaranteedCharacters is logging properly.
  for (let i = 0; i < options.passwordLength; i++) { //for loop creates as many random characters as was typed in for the first prompt, passwordLength.
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
    console.log(possibleCharacter);
  }
  for (let i = 0; i < guaranteedCharacters.length; i++) { //guarantees one random character (minimum) from each allowed character type is in the password.
    result.push(guaranteedCharacters[i]);
  }

  return result.join(''); //removes the ',' from between each array item in the password.
}

// function writePassword() {
//   let password = generatePassword();
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// document.getElementById("generate").addEventListener("click",writePassword);