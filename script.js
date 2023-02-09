// Assignment code here
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let numbers="1234567890";
let specialCharacters="\"!#$%&'()*+-,/:;=[]^_{}~";

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let length=window.prompt("how many characters would you like your password to contain?");
  let password="";
  while (password.length<length) {
    password+=lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    if (password.length==length) break;
    password+=uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    if (password.length==length) break;
    password+=specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    if (password.length==length) break;
    password+=numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  password=shuffleWord(password);
  return password;
}

function shuffleWord (word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
