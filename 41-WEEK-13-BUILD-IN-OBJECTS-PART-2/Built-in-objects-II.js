//1.	Write a JavaScript function that reverses
//a number. typeof result of the function should be “number”.
//12345 -> 54321
function reverseNumber(number) {
  var number = number + "";
  return number.split("").reverse().join("");
}
console.log(Number(reverseNumber(12345)));
console.log(typeof Number(reverseNumber(12345)));
//2.	Write a JavaScript function that returns a passed
//string with letters in alphabetical order. Note: Assume
//punctuation, numbers and symbols are not included in the
//passed string.
//“Webmaster” -> “abeemrstw”
function returnsPassedStringWithLettersInAlphabeticalOrder(string) {
  var newString = "";
  var newString = string.toLowerCase().split("").sort().join("");
  return newString;
}
console.log(returnsPassedStringWithLettersInAlphabeticalOrder("Webmaster"));
//3.Write a function to alphabetize words of a given string.
//Alphabetizing a string means rearranging the letters so they
//are sorted from A to Z.
//"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
function alphabetizeWordsOfGivenString(string) {
  var splitStringInArray = string.split(" ");
  var splitStringInArrayWithNoGaps = splitStringInArray.filter((string) => {
    if (string != " ") {
      return string;
    }
  });
  var arrayWithStringSorted = [];
  var stringSorted = "";
  splitStringInArrayWithNoGaps.forEach((element) =>
    arrayWithStringSorted.push(element.split("").sort().join(""))
  );
  return (stringSorted = arrayWithStringSorted.join(" "));
}
console.log(alphabetizeWordsOfGivenString("Republic of Serbia"));
//4.Write a function to split a string and
//convert it into an array of words.
//"John Snow" -> [ 'John', 'Snow' ]
function splitStringIntoArray(string) {
  var array = string.split(" ");
  return array;
}
console.log(splitStringIntoArray("John Snow"));
//5.	Write a function to convert a
//string to its abbreviated form.
//"John Snow" -> 	"John S."
function convertStringAbbreviatedForm(string) {
  var shortName = string.trim().split(" ");

  return `${shortName[0]} ${shortName[1].charAt(0)}.`;
}
console.log(convertStringAbbreviatedForm("John Snow"));
//6.Write a function that adds string to
//the left or right of string, by replacing
//it’s characters.

//'0000', ‘123’, 'l' -> '0123'
//'00000000', ‘123’, 'r' -> '12300000'
function addStringToLeftOrRight(string, addString, side) {
  var length = string.length - addString.length;
  var result = "";
  if (side === "l") {
    result = string.slice(0, length) + addString;
  }
  if (side === "r") {
    result = addString + string.slice(0, length);
  }
  console.log(result);
}
addStringToLeftOrRight("0000", "123", "r");
//7.Write a function to capitalize the
//first letter of a string and returns
//modified string.

//"js string exercises" -> "Js string exercises"
function capitalizeFirstLetterOfString(string) {
  var newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;
}
console.log(capitalizeFirstLetterOfString("js string exercises"));
//8.Write a function to hide email addresses
//to protect them from unauthorized users.
//"somerandomaddress@example.com"
//"somerand...@example.com"
function hideEmailAddress(email) {
  var splittedEmail = email.split("@");
  var firstPartOfEmail = splittedEmail[0];
  var average = firstPartOfEmail.length / 2;
  firstPartOfEmail = firstPartOfEmail.substring(
    0,
    firstPartOfEmail.length - average
  );
  secondPartOfEmail = splittedEmail[1];
  return firstPartOfEmail + "...@" + secondPartOfEmail;
}
console.log(hideEmailAddress("somerandomaddress@example.com"));
//9.Write a program that accepts a string as
//input and swaps the case of each character.
//For example, if you input
//'The Quick Brown Fox',
//the output should be 'tHE qUICK bROWN fOX'.
//var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var LOWER = 'abcdefghijklmnopqrstuvwxyz';
//"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
function swapCaseOfEachCharacter(string) {
  var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LOWER = "abcdefghijklmnopqrstuvwxyz";
  var newString = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      newString += string[i].toLowerCase();
    }
    if (string[i] == string[i].toLowerCase()) {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
console.log(swapCaseOfEachCharacter("tHE qUICK bROWN fOX"));
console.log(swapCaseOfEachCharacter("The Quick Brown Fox"));
