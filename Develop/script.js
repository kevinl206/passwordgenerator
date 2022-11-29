var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//1. Prompt user the password criteria.
// - Password length has to be between 8-128.
// - Needs to have array of uppers, lowers, numbers, and specials characters.
//2. Make sure the users choose the right characters.
//3. Generated the passwords once the steps are completed
//4. Display the password.


// added a variable of arrays of uppercase, lowercase, number, special characters for the user's choices when answered
var Lower = ["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

var totalArray = [["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"]];

var low = false;
var up = false;
var num = false;
var spec = false;


function generatePassword() {
  let password ="";
  let length = prompt("Please enter a password length between 8-128.");

  // a loop to make sure the user choose a character between 8-128
    if(isNaN(length) === false) {

      if(length < 8 || length > 128) {
        alert("Please choose a length between 8 and 128.")
        generatePassword();
      } else {
        var newTotalArray = chooseChar();
    // password would generate base on the prompt
        for(let i = 0; i <= length; i++) {
          let x = Math.floor(Math.random() * newTotalArray.length);
          password = password + newTotalArray[x];
        }
      }
    } else {
      alert("Please choose a value.")
      generatePassword();
    }
    return password;
  }
// if the user choose a true array.
  function chooseChar() {
    let newTotalArray = [];
    low = confirm("Would you like lowercase characters?");
    up = confirm("Would you like uppercase characters?");
    num = confirm("Would you like numbers?");
    spec = confirm("Would you like special characters?");
    if(up == false && low == false && spec == false && num == false) {
      alert("Please select at least one type of characters")
      
      chooseChar();
    } else {
      //gather the info and generate the password.
      let boolArray = [low, up, num, spec];
      for (let i = 0; i <= boolArray.length; i++) {
        if(boolArray[i]) {
          newTotalArray = newTotalArray.concat(totalArray[i]);
          console.log(newTotalArray);
        }
      }
    }
    return newTotalArray;
  }