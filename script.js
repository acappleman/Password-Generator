var generateBtn = document.querySelector("#generate");

var alpha = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function randomInteger(max) {
  return Math.floor(Math.random() * max);
}
function writePassword() {
  var lengthChoice = Number(window.prompt('What is the desired length of the password? Please choose a number between 8 and 128.'));
  while (lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = Number(window.prompt("Please enter a valid number, 8-128."));
  }
  var lowercase = window.prompt('Do you want to include lowercase letters? (Yes or No)').toLowerCase() === 'yes';
  var uppercase = window.prompt('Do you want to include uppercase letters? (Yes or No)').toLowerCase() === 'yes';
  var numbers = window.prompt('Do you want to include numbers? (Yes or No)').toLowerCase() === 'yes';
  var special = window.prompt('Do you want to include special characters? (Yes or No)').toLowerCase() === 'yes';

  var password = generatePassword(lengthChoice, lowercase, uppercase, numbers, special);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(lengthChoice, lowercase, uppercase, numbers, special) {
  var generatedPassword = '';
  var lowercaseUsed = false;
  var uppercaseUsed = false;
  var numberUsed = false;
  var specialUsed = false;

  for (i = 0; i < lengthChoice; i++) {
    if (lowercase && !lowercaseUsed) {
      generatedPassword = generatedPassword + alpha.charAt(randomInteger(alpha.length));
      lowercaseUsed = true;
    } else if (uppercase && !uppercaseUsed) {
      generatedPassword = generatedPassword + alpha.toUpperCase().charAt(randomInteger(alpha.length));
      uppercaseUsed = true;
    } else if (numbers && !numberUsed) {
      generatedPassword = generatedPassword + randomInteger(10);
      numberUsed = true;
    } else if (special && !specialUsed) {
      generatedPassword = generatedPassword + symbols.charAt(randomInteger(symbols.length));
      specialUsed = true;
    } else {

      var options = '';
      if (lowercase) {
        options = options + alpha;
      }

      if (uppercase) {
        options = options + alpha.toUpperCase();
      }

      if (numbers) {
        options = options + numeric;
      }

      if (special) {
        options = options + symbols;
      }

      generatedPassword = generatedPassword + options.charAt(randomInteger(options.length));
    }

  }
  return generatedPassword;
}

generateBtn.addEventListener("click", writePassword);
