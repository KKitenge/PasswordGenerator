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
//var passwordCriteria = alert("Hello! \nTo generate your new password, please proceed with the following steps...");

//prompt("Please choose a password between 8 and 128 characters in length. Enter the character count below: ");

//Prompt for length between 8 and 128 characters
function generatePassword(){
  userInput = prompt("How many characters would you like your password? Choose between 8 and 128");    
    if (userInput < 8 || userInput > 128) {      
        userInput = prompt("Please choose a password only between 8 and 128 characters in length");
    } else {
        // confirm() dialog box displayed with ok or cancel/true, false
        userNumber = confirm("Will this contain numbers? - Ok for Yes and Cancel for No");
        userCharacter = confirm("Will this contain special characters? - Ok for Yes and Cancel for No");
        userUppercase = confirm("Will this contain Uppercase letters? - Ok for Yes and Cancel for No");
        userLowercase = confirm("Will this contain Lowercase letters? - Ok for Yes and Cancel for No");
    };
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
