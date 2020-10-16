// Assignment Code
var generateBtn = document.querySelector("#generate");



var passwordLength = 0;

while(passwordLength <= 0){
 passwordLength = Number(prompt("How many chars long would you like your password be?"));
}

var passwordContainsLowerCase = confirm("Would you like lowercase?");
var passwordContainsUpperCase = confirm("Would you like uppercase?");
var passwordContainsNumeric = confirm("Would you like numeric values?");
var passwordContainsSpecial = confirm("Would you like Special Chars?");

var stringSpecialChars = ["\@","\%","\+","\$","\!","\#","\^","\&","\?"];
var stringLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var stringUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var stringNumericCase = ["1","2","3","4","5","6","7","8","9","0"];

var encryption = new Array();
var bigPool = new Array();




//Second Thought
//Maybe we generate an empty array which would be our password.
//maybe we have the four strings already created, we generate one BIG POOL with selection.
//So big pool would have all the special chars, lower acse and upper case if that is what the user chooses
//Traverse through each element of the password and add a random char from the BIG POOL.
//Simple but kinda fits the needs

function generatePassword(){

  generateBigPool();

  var randomNumber = 0;
  
  for(i = 0; i< passwordLength; i++){
    encryption[i] = bigPool[Math.floor(Math.random() * bigPool.length)];
  }


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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
