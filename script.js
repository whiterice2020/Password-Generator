// Assignment Code
// this is where the button functions
var generateBtn = document.querySelector("#generate"); 

// code to gen the password

// Setting Variables
    // Possible array for finished PW for user
    var finishedPw = "";
    
    
    
    var lowerChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789"; 
    var sym = "!@#$%^&*=-_";
    var upperCharArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var confirmUpperCharArray=[];
    var lowerCharArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var confirmLowerCharArray=[];
    var numArray=["1","2","3","4","5","6","7","8","9"];
    var confirmNumArray=[];
    var specialCharactersArray=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "_", "-" ];
    var confirmSpecialCharactersArray=[];
    var combinedArray=[];
    var password = "";
    var finalPassword = "";
    
    // Begin PW Creating
    function generatePassword(){
    // Reset PW Array to empty string      
      finalPassword = "";
      var numOfChar = prompt("How many Characters");


    // Code check to see if numOfChar is working
    console.log ("numOfChar" + numOfChar);
      
    // If statement for Min and Max Number of Characters
    
    if (numOfChar > 7 && numOfChar < 128) {
        console.log("number of char asking", numOfChar);
       
        var confirmUpperCase = confirm("Do you want Uppercase Letters?");
        var confirmSpecialCharacters = confirm("Do you want Special Characters?");
        var confirmNumbers = confirm("Do you want Numbers?");
        var confirmLowerCase = confirm("Do you want Lowercase Letters");

    // Take users choices and enter array into eaches confirm array
     if (confirmUpperCase) {
      // Code Check
      // alert ("ConfirmUpperCase");
      password += combinedArray.concat(upperCharArray);
      console.log (password);
     } 
    //  console.log (confirmUpperCharArray + finishedPw);

     if (confirmSpecialCharacters) {
       // Code Check
      // alert ("confirmSpecialCharacters");
      password += combinedArray.concat(specialCharactersArray);
      console.log (password);
     }

     if (confirmNumbers) {
       // Code Check
      // alert ("confirmNumbers");
      password += confirmNumArray.concat(numArray);
      console.log (password);
     }
     
     if (confirmLowerCase) {
       // Code Check
      // alert ("confirmLowerCase");
      password += confirmLowerCharArray.concat(lowerCharArray);
      console.log(password);
      
     }

     // Removes Commas from array
        password = password.replace(/,/g, "")
        console.log("Removed Commas from PW", password)
    // Sets Number of Characters for the PW
 
 for (let index = 0; index < numOfChar; index++) {
     finalPassword += password.charAt(Math.floor(Math.random() * password.length));    
     
     // End of Random Char Generation with Character length
 
   }

 // end of for


// return "This is where the results are of the code will be displayed"
 console.log ("PW should be in the box now");
 return finalPassword;  
     
// End of If statement for character requirement
    }
    else {
      alert("Must be between 8 and 128 characters")
      console.log("Not enough chars", numOfChar);
      
     }

     
    

  
    
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // var createPw = confirm("Do you want to create a Complex Password?");

  passwordText.value = password;
  
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
