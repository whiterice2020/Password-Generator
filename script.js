// Assignment Code
// this is where the button functions
var generateBtn = document.querySelector("#generate"); 

// code to gen the password
//research comcat, push, 
function generatePassword(){
// Setting Variables
    // Possible array for finished PW for user
    var finishedPwArray =[]
    
    var numOfChar = prompt("How many Characters");
    var confirmUpperCase = confirm("Do you want Uppercase Letters?");
    var confirmSpecialCharacters = confirm("Do you want Special Characters?");
    var confirmNumbers = confirm("Do you want Numbers?");
    var confirmLowerCase = confirm("Do you want Lowercase Letters");
    var lowerChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789"; 
    var sym = "!@#$%^&*=-_";
    var upperCharArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerCharArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numArray=["1","2","3","4","5","6","7","8","9"];
    var specialCharactersArray=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "_", "-" ]
    
    // Code check to see if numOfChar is working
    console.log ("numOfChar" + numOfChar);
    
    // array for password to get thrown into from if statements
    

    // Take Users Choices and put them into pw generator
    
    // Take users choices and enter array into finishedPW array
     if (confirmUpperCase) {
      // Code Check
      alert ("ConfirmUpperCase")
      finishedPwArray.push(upperCharArray);
     } 
     
     if (confirmSpecialCharacters) {
       // Code Check
      alert ("confirmSpecialCharacters")
      finishedPwArray.push(specialCharactersArray);
     }

     if (confirmNumbers) {
       // Code Check
      alert ("confirmNumbers")
      finishedPwArray.push(numArray);
     }
     
     if (confirmLowerCase) {
       // Code Check
      alert ("confirmLowerCase")
      finishedPwArray.push(lowerCharArray);
     }
     
     
    // Sets Number of Characters for the PW
    for (let index = 0; index <numOfChar.length; index++) {
      // const element = numOfChar[index];
      
      
        // var finishedPw = finishedPwArray[Math.floor(Math.random() * numOfChar.length)];
        let finishPw = finishedPwArray[Math.floor(Math.random() * numOfChar.length)];
      

      // Code Check to see if finishedPw var is working
      console.log("finishedPw Var " + finishPw);
    }

    // end of for
    
  // return "This is where the results are of the code will be displayed"
    // return finishPw;  
  
  
  
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
