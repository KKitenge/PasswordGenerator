// Assignment code here

//Objective is to randomly generate a password that meets certain criteria

var userInput;
var userNum;
var userChar;
var userLow;
var userUpper;

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var numeric = ["0123456789"]

//Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

//Prompt for user to input criteria
//Prompt for length between 8 and 128 characters
function generatePassword(){   
    userInput = prompt("How many characters would you like your password? Choose between 8 and 128");
    if (userInput < 8) {      
        userInput = prompt("Please choose a password only between 8 and 128 characters in length");
    } else {
        userNum = confirm("Will this contain numbers? - Ok for Yes and Cancel for No");
        userChar = confirm("Will this contain $peci@! characters? - Ok for Yes and Cancel for No");
        userUpper = confirm("Will this contain UPPERCASE letters? - Ok for Yes and Cancel for No");
        userLower = confirm("Will this contain lowercase letters? - Ok for Yes and Cancel for No");
    }
    //Options
    if (userNumber && userCharacter && userUppercase && userLowercase) {
      answer = numeric.concat(character, userUppercase, lowercase);
      }
}

generatePassword()