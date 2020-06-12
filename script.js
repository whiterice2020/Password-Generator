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
    var confirmLowerCharArray=[]
    var numArray=["1","2","3","4","5","6","7","8","9"];
    var confirmNumArray=[];
    var specialCharactersArray=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "_", "-" ];
    var confirmSpecialCharactersArray=[];
    var combinedArray=[]
    function generatePassword(){

      var numOfChar = prompt("How many Characters");
      var confirmUpperCase = confirm("Do you want Uppercase Letters?");
      var confirmSpecialCharacters = confirm("Do you want Special Characters?");
      var confirmNumbers = confirm("Do you want Numbers?");
      var confirmLowerCase = confirm("Do you want Lowercase Letters");

    // Code check to see if numOfChar is working
    console.log ("numOfChar" + numOfChar);
      
    // If statement for Min and Max Number of Characters
    
    if (numOfChar > 7 && numOfChar < 127) {

    // Take users choices and enter array into eaches confirm array
     if (confirmUpperCase) {
      // Code Check
      // alert ("ConfirmUpperCase");
      finishedPw += combinedArray.concat(upperCharArray);
      console.log (combinedArray + finishedPw);
     } 
    //  console.log (confirmUpperCharArray + finishedPw);

     if (confirmSpecialCharacters) {
       // Code Check
      // alert ("confirmSpecialCharacters");
      finishedPw += combinedArray.concat(specialCharactersArray);
      console.log (finishedPw + combinedArray);
     }

     if (confirmNumbers) {
       // Code Check
      // alert ("confirmNumbers");
      finishedPw += confirmNumArray.concat(numArray);
      console.log (finishedPw + confirmNumArray);
     }
     
     if (confirmLowerCase) {
       // Code Check
      // alert ("confirmLowerCase");
      finishedPw += confirmLowerCharArray.concat(lowerCharArray);
      console.log(finishedPw + confirmLowerCharArray);
      
     }
     
      

    }
    // Removes Commas from array
        finishedPw = finishedPw.replace(/,/g, "")
        console.log("Removed Commas from PW", finishedPw)
    // Sets Number of Characters for the PW
    for (let index = 0; index <numOfChar.length; index++) {
      // const element = numOfChar[index];
      
      
        // var finishedPw = finishedPwArray[Math.floor(Math.random() * numOfChar.length)];
        // let finishPw = finishedPwArray[Math.floor(Math.random() * numOfChar.length)];
      

      // Code Check to see if finishedPw var is working
      // console.log("finishedPw Var " + finishPw);
      // console.log("finishedPwArray");
    }

    // end of for
    
  // return "This is where the results are of the code will be displayed"
    return combinedArray;  
  
    
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // var createPw = confirm("Do you want to create a Complex Password?");

  passwordText.value = password;
  
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
