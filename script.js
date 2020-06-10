// Assignment Code
// this is where the button functions
var generateBtn = document.querySelector("#generate"); 

// code to gen the password
//research comcat, push, 
function generatePassword(){
// Setting Variables
    var numOfChar = prompt("How many Characters");
    var userUpperCase = confirm("Do you want Uppercase Letters?");
    var userSpecialCharacters = confirm("Do you want Special Characters?");
    var userNumbers = confirm("Do you want Numbers?");
    var userLowerCase = confirm("Do you want Lowercase Letters");
    var lowerChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = '0123456789'; 
    var sym = '!@#$%^&*=-_';
    var upperCharArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerCharArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // var numArray=[1,2,3,4,5,6,7,8,9,10]
    var specialCharactersArray=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "_", "-" ]

    // Take Users Choices and put them into pw generator


    console.log(num);


  return getRandomLower
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
