// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // all the prompts to record the desired properties of the password for the user.
  length = prompt("Please type your desired password length (8-128 characters limit).");
  console.log(length);

  uppercasing = window.confirm("Would you like to include uppercase letters in your password? Click 'OK' for YES, or 'Cancel' for NO.");
  console.log(uppercasing);

  lowercasing = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for YES, or 'Cancel' for NO.");
  console.log(lowercasing);

  numbers = window.confirm("Would you like to include numbers in your password? Click 'OK' for YES, or 'Cancel' for NO.");
  console.log(numbers);

  special = window.confirm("Would you like to include special characters '!,@,#,$,%,^,&,*) in your password? Click 'OK' for YES, or 'Cancel' for NO.");
  console.log(special);

  var password = generatePassword(length, uppercasing, lowercasing, numbers, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}


function generatePassword(length, uppercasing, lowercasing, numbers, special) {
 //array of all possible character options (will start blank, and add into it)
  var characters = [];
  //string to store the randomly generated characters into
  var emptyPassword = ""

//if statement to ensure the user chooses from 8-128 characters, will give undefined in box.
  if (length < 8 || length > 128) {
    window.alert("ERROR: Please choose a password length from 8 to 128 characters only please. Please try again.");
    return;
  }

 //based on the user responses to the prompts, we will add to our array that we can randomly select from
  if (uppercasing === true) {
    characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
  }

  if (lowercasing === true) {
    characters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
  }

  if (numbers === true) {
    characters.push("1","2","3","4","5","6","7","8","9","0")
  }

  if (special === true) {
    characters.push("!","@","#","$","%","^","&","*")
  }

  //for loop will take a random number of however long the created array length is, and record the character at that number index position in the console
  for (i=0; i<length; i++) {
    var randomNum = Math.random();
    var numTimesLength = randomNum * characters.length;
    var roundDown = Math.floor(numTimesLength);
    emptyPassword = emptyPassword.concat(characters[roundDown]);
  }
  return emptyPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
