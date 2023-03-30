// Assignment code here

//Objective is to randomly generate a password that meets certain criteria
    // 

//Click button to generate a password

//Prompt user for criteria

//Prompt for length between 8 and 128 characters
var passwordLength = 
prompt("Please choose a password between 8 and 128 characters in length. Enter the character count here: ")

//Prompt for special characters-upper/lowercase and numeric - special characters from owasp.org
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numeric = "0123456789";


//Each prompt is to be answered with validation

//When all prompts are answered, a password is generated that matches all selected criteria

//The password is displayed on the page or in an alert

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
