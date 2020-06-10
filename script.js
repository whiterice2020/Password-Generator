// Assignment Code
// this is where the button functions
var generateBtn = document.querySelector("#generate"); 

// code to gen the password
//research comcat, push, 
function generatePassword(){

    var numOfChar = prompt("How many Characters");
    var upperCase = confirm("Do you want Uppercase Letters?");
    var lowerCase = confirm("Do you want Lowercase Letters");
    var specialCharacters = confirm("Do you want Special Characters?");
    




  return numOfChar
  // return "This is where the results are of the code will be displayed"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // var createPw = confirm("Do you want to create a Complex Password?");

  passwordText.value = password;
  
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
