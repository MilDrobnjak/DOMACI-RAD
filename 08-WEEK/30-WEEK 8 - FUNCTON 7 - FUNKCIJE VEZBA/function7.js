// 1.	Write a function named tellFortune that:
// 	takes 4 arguments: number of children, partner's name,
// geographic location, job title.
// 	outputs your fortune to the screen like so: "You will be a X in Y,
// and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(numChildren, partnersName, geographicLocation, jobTitle) {
  resultat = `You will be a ${jobTitle}, in ${geographicLocation}, and married to ${partnersName} with ${numChildren} children.`;
  return resultat;
}
console.log(tellFortune(3, "Anja", "Novi Sad", "tester"));
// 2.	Write a function named calculateDogAge that:
// 	takes 1 argument: your puppy's age.
// 	calculates your dog's age based on the conversion rate
// of 1 human year to 7 dog years.
// 	outputs the result to the screen like so: "Your doggie
// is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes
// the conversion rate of human to dog years.
function calculateDogAge(puppyAge, conversionRate) {
  var dogYear = puppyAge * conversionRate;
  var rez = `Your doggie is ${dogYear} years old in dog years!`;
  return rez;
}
console.log(calculateDogAge(3, 7));
// 3.	Write a function named calculateSupply that:
// 	takes 2 arguments: age, amount per day.
// 	calculates the amount consumed for rest of the life
//(based on a constant max age).
// 	outputs the result to the screen like so: "You will
// need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and
// round the result to a round number.
function calculateSupply(age, amountPerDay) {
  var maxAge = 80;
  var sumOfMoney = 365 * (maxAge - age) * amountPerDay;
  reza = `You will need ${sumOfMoney} to last you until the ripe old age of ${maxAge}.`;
  return reza;
}
console.log(calculateSupply(25, 500));

// 4.	Create a function called celsiusToFahrenheit:
// 	Store a celsius temperature into a variable.
// 	Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// 	Now store a fahrenheit temperature into a variable.
// 	Convert it to celsius and output "NN°F is NN°C."
// *NN is actual temperature you need to convert
function celsiusToFahrenheit(temperature) {
  var converterToFar = 1.8 * temperature + 32;

  return (rez = `${temperature}°C is ${converterToFar}°F.`);
}
console.log(celsiusToFahrenheit(32));

function fahrenheitToCelsius(temperature) {
  var conToCel = (temperature - 32) / 1.8;

  return (rez = `${temperature}°F is ${conToCel}°C.`);
}
console.log(fahrenheitToCelsius(89.6));

//f=1.8*c+32
// 5.	Create a function that validates a password to conform to the following rules:
// 	Length between 6 and 24 characters,
// 	At least one uppercase letter (A-Z).
// 	At least one lowercase letter (a-z).
// 	At least one digit (0-9).
// 	Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// 	Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
// 	Examples:  validatePassword("P1zz@") ➞ false  // Too short.
// 	validatePassword("iLoveYou") ➞ false      // Missing a number.
// 	validatePassword("Fhg93@") ➞ true       // OK!

function checkLength(string) {
  var rezLength = "Password must have length between 6 and 24 characters";

  if (string.length < 6 || string.length > 24) {
    console.log(rezLength);
    return false;
  } else {
    return true;
  }
}

function upercaseLetter(string) {
  var rezLowercase = "Password must have at least one digit";

  if (/[A-Z]/.test(string)) {
    console.log("Corect password.");
    return true;
  } else {
    console.log(rezLowercase);
    return false;
  }
}

function lowercaseLetter(string) {
  var rezUpercase = "Password must have at least one uppercase letter";

  if (/[a-z]/.test(string)) {
    console.log("Corect password.");
    return true;
  } else {
    console.log(rezUpercase);
    return false;
  }
}

function checkDigits(string) {
  var rezDigits = "Password must have at least one digit";

  if (/[0-9]/.test(string)) {
    console.log("Corect password.");
    return true;
  } else {
    console.log(rezDigits);
    return false;
  }
}

function maximumOfRepeatedCharacters(string) {
  var rezMaximum = "Password must not include three same characters.";
  if (/(.)\1{2,}/.exec(string)) {
    console.log(rezMaximum);
    return true;
  } else {
    console.log("Corect password.");
    return false;
  }
}

function supportedSpecialCharacters(string) {
  var rezSupported = "Password must not include special characters.";

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(string)) {
    console.log(rezSupported);
    return true;
  } else {
    console.log("Corect password.");
    return false;
  }
}

function validatePassword(string) {
  if (
    checkLength(string) &&
    upercaseLetter(string) &&
    lowercaseLetter(string) &&
    checkDigits(string) &&
    !maximumOfRepeatedCharacters(string) &&
    !supportedSpecialCharacters(string)
  ) {
    console.log("Successful password");
  } else {
    console.log("Password is not valid");
  }
}
validatePassword("fgdfgdg1sSd");

// 6.	Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4   // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8    // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10    // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
function howMenyPrimeNumbers(number) {
  var index = 0;
  var arrayPrimeNum = [];
  for (i = 2; i < number; i++) {
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        continue;
      } else {
        index++;
      }
    }
    if (index == i - 2) {
      arrayPrimeNum.push(i);
    }
    index = 0;
  }
  return arrayPrimeNum;
}
console.log(howMenyPrimeNumbers(20));
// 7.	Create a function that returns an array that expands by 1 from 1 to the value of the input,
//and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.
// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]
function returnAnArrayExpand(value) {
  var newArray = [];
  for (i = 1; i <= value; i++) {
    for (j = 0; j < i; j++) {
      newArray.push(i);
    }
  }
  for (i = value - 1; i >= 1; i--) {
    for (j = 0; j < i; j++) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(returnAnArrayExpand(6));
