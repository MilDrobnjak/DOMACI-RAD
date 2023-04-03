// 1.	Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false
function checkIsItString(input) {
  if (input === String(input)) {
    reza = true;
  } else if (input === Number(input)) {
    reza = false;
  }
  return reza;
}
console.log(checkIsItString("true"));
// 2.	Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false
function checkString(input) {
  if ((input === String(input) && input === " ") || input === "") {
    rez = true;
  } else {
    rez = false;
  }
  return rez;
}
console.log(checkString(" "));
// 3.	Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"
function concatGivenString(str, num) {
  for (i = 1; i < num; i++) {
    str += str;
  }
  return str;
}
console.log(concatGivenString("Ha", 3));
// 4.	Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2
function countNumberOfLetter(str, letter) {
  var brojac = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      brojac++;
    }
  }
  return brojac;
}
console.log(countNumberOfLetter("My random string is these", "s"));
// 5.	Write a function to find the position of the first occurrence
// of a character in a string. The result should be the position of character.
// If there are no occurrences of the character, the function should return -1.
function positionOfFirstOccurrence(string, character) {
  var brojac = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === character) {
      brojac = i + 1;
      break;
    } else {
      string[i] !== character;
      brojac = -1;
    }
  }
  return brojac;
}
console.log(positionOfFirstOccurrence("string", "s"));

// 6.	Write a function to find the position of the last occurrence
//  of a character in a string. The result should be in human numeration form.
//   If there are no occurrences of the character, function should return -1.
function lastOccurrence(str, character) {
  var brojac = 0;
  for (i = str.length; i > 0; i--) {
    if (str[i] === character) {
      brojac = i + 1;
      break;
    } else {
      str[i] !== character;

      brojac = -1;
    }
  }
  return brojac;
}
console.log(lastOccurrence("string of string", "g"));
// 7.	Write a function to convert string into an array.
//Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]
function convertStringIntoArray(string) {
  var array = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array[i] = null;
    } else {
      array[i] = string[i];
    }
  }
  return array;
}
console.log(convertStringIntoArray("f df dsdf dg dfgd"));

// 8.	Write a function that accepts a number as a parameter
//and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater
//than 1 that has no positive divisors other than 1 and itself.
function cheskIfNumIsPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      result = "Broj nije prost broj.";
      break;
    } else {
      result = "Broj je prost broj.";
    }
  }
  return result;
}
console.log(cheskIfNumIsPrime(11));
//Prost broj je prirodan broj veći od 1, deljiv samo brojem 1 i samim sobom. Prosti brojevi su, na primer:
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,...

// 9.	 Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"
function replacesSpaces(string, separator) {
  var rez = "";
  if (separator === undefined) {
    separator = "-";
  } else {
    separator = separator;
  }

  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      rez += separator;
    } else {
      rez += string[i];
    }
  }
  return rez;
}
console.log(replacesSpaces("gdfg fdg hhh yguy"));
// 10.	 Write a function to get the first n characters and add “...”
// at the end of newly created string.
function getFirtsCharacter(string, character) {
  var rez = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] !== character) {
      rez += string[i];
    } else if (string[i] === character) {
      rez += "...";
      break;
    }
  }

  return rez;
}
console.log(getFirtsCharacter("gdfsgdsgd", "s"));

// 11.	 Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
function convertArrayOfString(array) {
  var newArray = [];
  var ind = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === String(array[i])) {
      newArray[ind] = Number(array[i]);
      ind++;
    } else {
      continue;
    }
  }
  return newArray;
}

console.log(
  convertArrayOfString(["1", "21", "undefined", "42", "1e+3", Infinity])
);
// 12.	 Write a function to calculate how many years there are left until
//retirement based on the year of birth.
//Retirement for men is at age of 65 and for women at age of 60.
//If someone is already retired, a proper message should be displayed.
function yearsUntilRetirement(manOrWoman, yearOfBirth) {
  if (manOrWoman === "man") {
    retirement = 65 - (2022 - yearOfBirth);
    if (retirement <= 0) {
      retirement = "You are already retired";
    }
  } else if (manOrWoman === "woman") {
    retirement = 60 - (2022 - yearOfBirth);
    if (retirement <= 0) {
      retirement = "You are already retired";
    }
  }
  return retirement;
}
console.log(yearsUntilRetirement("man", 1957));
//  13.	Write a function to humanize a number
// (formats a number to a human-readable string)
// with the correct suffix such as 1st, 2nd, 3rd or 4th.
//  1 -> 1st
//  11 -> 11th
function humanizeNumber(number) {
  reza = "";
  if (number === 1) {
    reza = number + "st";
  } else if (number === 2) {
    reza = number + "nd";
  } else if (number === 3) {
    reza = number + "rd";
  } else if (number >= 4) {
    reza = number + "th";
  }
  return reza;
}
console.log(humanizeNumber(3));
