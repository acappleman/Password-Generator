// SELECTING THE GENERATE BUTTON BASED OFF .css id
var generateBtn = document.querySelector("#generate");

//DEFINING CHARACTERS BY SETTING VARIABLES
var alpha = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Function will define what number is returned. Math.random() sets a number b/t 0-1. Math.floor rounds the number down to nearest whole integer. 
function randomInteger(max) {
    return Math.floor(Math.random() * max);
}

// Function will promt user to choose how to write password
function writePassword() {
    var lengthChoice = Number(window.prompt('What is the desired length of the password? Please choose a number between 8 and 128.'));

    while (lengthChoice < 8 || lengthChoice > 128) {
        lengthChoice = Number(window.prompt("Please enter a valid number, 8-128."));
    }
    //console.log(lengthChoice);
    var lowercase = window.prompt('Do you want to include lowercase letters? (Yes or No)').toLowerCase() === 'yes';
    //console.log(lowercase)
    var uppercase = window.prompt('Do you want to include uppercase letters? (Yes or No)').toLowerCase() === 'yes';
    //console.log(uppercase)
    var numbers = window.prompt('Do you want to include numbers? (Yes or No)').toLowerCase() === 'yes';
    //console.log(numbers)
    var special = window.prompt('Do you want to include special characters? (Yes or No)').toLowerCase() === 'yes';
    //console.log(special)

    //Setting value of password to the generated password which is based off our for loop
    var password = generatePassword(lengthChoice, lowercase, uppercase, numbers, special);
    //Selecting the text area where password will display based off id=password in html
    var passwordText = document.querySelector("#password");
    //Setting the value of the text area to the generated password, which is equal to password. 
    passwordText.value = password;

}

//This function is building the password based on what the user has specified using prompt windows
function generatePassword(lengthChoice, lowercase, uppercase, numbers, special) {
    var generatedPassword = '';
    var lowercaseUsed = false;
    var uppercaseUsed = false;
    var numberUsed = false;
    var specialUsed = false;

    for (i = 0; i < lengthChoice; i++) {

        //console.log(`i = ${i}, password is ${password}`);
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
            //console.log('I was here')
            generatedPassword = generatedPassword + symbols.charAt(randomInteger(symbols.length));
            specialUsed = true;
        } else {
            // PUT ANYTHING
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

            //console.log(`This is the options string: ${options}`);
            generatedPassword = generatedPassword + options.charAt(randomInteger(options.length));
        }

    }
    return generatedPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
