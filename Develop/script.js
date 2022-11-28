var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


// added a variable of arrays of uppercase, lowercase, number, special characters 
var alphabetLower = ["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~","`","!","@","#","$","%","^","&","*","(",")"," ","\'", "\"","-","+","=","_","\\","]","[","<",">","?","{","}","|", ":",";", ","];

var totalArr = [["a","b","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], [0, 1, 2, 3, 4, 5, 6, 7, 9, 9], ["~","`","!","@","#","$","%","^","&","*","(",")"," ","\'", "\"","-","+","=","_","\\","]","[","<",">","?","{","}","|", ":",";", ","]];

var low = false;
var up = false;
var num = false;
var spec = false;

// password would generate base on the prompt
function generatePassword() {
  let password ="";
  let length = prompt("Please enter a password length between 8-128.");

    if(isNaN(length) === false) {

      if(length < 8 || length > 128) {
        alert("Please choose a length BETWEEN 8 and 128.")
        generatePassword();
      } else {
        var newTotalArr = chooseChar();
    
        for(let i = 0; i <= length; i++) {
          let x = Math.floor(Math.random() * newTotalArr.length);
          password = password + newTotalArr[x];
        }
      }
    } else {
      alert("Please choose a integer value. Not a string.")
      generatePassword();
    }
    return password;
  }

  function chooseChar() {
    let newTotalArr = [];
    low = confirm("Would you like lowercase characters?");
    up = confirm("Would you like uppercase characters?");
    num = confirm("Would you like numbers?");
    spec = confirm("Would you like special characters?");
    if(up == false && low == false && spec == false && num == false) {
      alert("Please select at least one type")
      chooseChar();
    } else {
      let boolArr = [low, up, num, spec];
      for (let k = 0; k <= boolArr.length; k++) {
        if(boolArr[k]) {
          newTotalArr = newTotalArr.concat(totalArr[k]);
          console.log(newTotalArr);
        }
      }
    }
    return newTotalArr;
  }