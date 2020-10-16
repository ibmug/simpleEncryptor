// Assignment Code
var generateBtn = document.querySelector("#generate");



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

var passwordLength = 0;

while(passwordLength <= 0){
 passwordLength = Number(prompt("How many chars long would you like your password be?"));
}
console.log("Password Length = " + passwordLength);
var passwordContainsLowerCase = confirm("Would you like lowercase?");
console.log("Contains lowercase = " + passwordContainsLowerCase);
var passwordContainsUpperCase = confirm("Would you like uppercase?");
console.log("Contains uppercase = " + passwordContainsUpperCase);
var passwordContainsNumeric = confirm("Would you like numeric values?");
console.log("Contains numeric values " + passwordContainsNumeric);
var passwordContainsSpecial = confirm("Would you like Special Chars?");

var stringSpecialChars = ["\@","\%","\+","\$","\!","\#","\^","\&","\?"];
var stringLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var stringUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var stringNumericCase = ["1","2","3","4","5","6","7","8","9","0"];

var encryption = new Array();
var bigPool = new Array();
//Math.floor(Math.random() * max + min);



//Second Thought
//Maybe we generate an empty array which would be our password.
//maybe we have the four strings already created, we generate one BIG POOL with selection.
//So big pool would have all the special chars, lower acse and upper case if that is what the user chooses
//Traverse through each element of the password and add a random char from the BIG POOL.
//Simple but kinda fits the needs

function generatePassword(){

  generateBigPool();
  console.log(bigPool);
  var randomNumber = 0;
  
  for(i = 0; i< passwordLength; i++){
    encryption[i] = bigPool[Math.floor(Math.random() * bigPool.length)];
  }
  console.log(encryption);

  return encryption;

}




function generateBigPool(){
  
      if(passwordContainsUpperCase){
        bigPool = bigPool.concat(stringUpperCase);
      }
      if(passwordContainsLowerCase){
        bigPool = bigPool.concat(stringLowerCase);
      }
      if(passwordContainsSpecial){
        bigPool = bigPool.concat(stringSpecialChars);
      }
      if(passwordContainsNumeric){
        bigPool = bigPool.concat(stringNumericCase);
      }

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //password = password.revolver();
  var passwordText = document.querySelector("#password");
console.log("Final Password is "+ password);
  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);
