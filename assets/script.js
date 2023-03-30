// Assignment code here

//Objective is to randomly generate a password that meets certain criteria
    

    //User input value unkown
var UserInput;
//var passwordlength = [8 - 128]; - this isn't working

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var numeric = ["0123456789"]

//validate criteria

//Prompt for special characters-upper/lowercase and numeric - special characters from owasp.org
// Yes or no answers to be retained
//var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//var numeric = "0123456789";

var lowerCaseAnswer = 
//var upperCaseAnswer =
//var specialAnswer =
//var numericAnswer =

//

//Prompt user for criteria
var passwordCriteria = alert("Hello! \nTo generate your new password, please proceed with the following steps...");

prompt("Please choose a password between 8 and 128 characters in length. Enter the character count below: ");

//Prompt for length between 8 and 128 characters
function criteria(){
   // prompt("Please choose a password between 8 and 128 characters in length. Enter the character count below: ");
    var passwordLength = parseInt(passwordLength);{
    if (UserInput < 8){
      alert("Please choose a character limit between 8 through 128");
    }
    else if (UserInput > 128)
      alert("Please choose a character limit under 128");
  }
}




//Each prompt is to be answered with validation
function answerConfirm() {
  confirm("Please confirm your answer by clicking on OK to continue");
}

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
