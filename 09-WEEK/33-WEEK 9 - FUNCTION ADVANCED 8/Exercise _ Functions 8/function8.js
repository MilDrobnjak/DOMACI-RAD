// IIFE = Immediately Invoked Function Expressions

// 1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements.
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]
function replace(arr) {
  var arr1 = [];
  arr1 = (function () {
    for (i = 0; i < arr.length; i++) {
      arr1[i] = arr[i];
    }
    arr1[0] = arr[arr.length - 1];
    arr1[arr1.length - 1] = arr[0];
    return arr1;
  })();
  return "[" + arr1.join(", ") + "]";
}
console.log(replace([4, 5, 11, 9]));
// 2.	Write IIFE that calculates the surface
//area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
function surface(a, b) {
  var inner = function (x, y) {
    return x * y;
  };
  return inner(a, b);
}
console.log(surface(4, 5));

// 3.	Write IIFE that replaces all appearances
// of the letters m or M with * and returns the number of replacements.
// 	Input: prograMming
// 	Output: progra**ing, 2

function replaceOfLetters(string) {
  var newString = "";
  var str = (function () {
    for (i = 0; i < string.length; i++) {
      if (string[i] === "m" || string[i] === "M") {
        newString += "*";
      } else {
        newString += string[i];
      }
    }
    return str;
  })();
  return newString;
}
console.log(replaceOfLetters("programMing"));

// 4.	Write a function with parameters name and surname that returns a function
//that suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// 	Output: pera.peric@gmail.com
function suggestAnEmail(name, surname) {
  var inner = function (name, surname) {
    var newEmail = "";
    newEmail = name + "." + surname + "@gmail.com";
    return newEmail;
  };
  return inner(name, surname);
}
console.log(suggestAnEmail("milos", "drobnjak"));
// 5.	Write a function that returns a function that calculates a
// decimal value of the given octal number.
// Input: 034
// Output: 28
function calculatesDecimalValueOfGivenOctalNumber(octalNumber) {
  var calc = (function () {
    var dec = octalNumber.toString();
    var dec1 = 0;
    //console.log(typeof dec);
    dec1 = Number(dec);
    //console.log(typeof dec1);
    return dec1;
  })();
  return calc;
}
console.log(calculatesDecimalValueOfGivenOctalNumber(034));
// 6.	Write a function that checks if a given string is valid password.
//The password is valid if it is at least 6 characters long and contains
// at least one digit. The function should receive two callbacks named
// successCallback and errorCallback that should be called in case password
//is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// 	Input: JSGuru123
// 	Output: Your password is cool!
function checkIsValidPassword(password) {
  var rezultat = (function () {
    rez = "";
    if (/[0-9]/.test(password) && password.length >= 6) {
      rez = "Your password is cool!";
    } else {
      rez = "Your password is invalid!";
    }
    return rez;
  })();
  return rezultat;
}
console.log(checkIsValidPassword("JSGuru"));
// 7.	Write a function that filters elements of the given array so that they
// satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]
function filterElements(array) {
  var oddElements = (function () {
    var newArray = [];
    var a = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2) {
        newArray[a] = array[i];
        a++;
      }
    }
    return newArray;
  })();
  return oddElements;
}
console.log(filterElements([2, 8, 11, 4, 9, 3]));
