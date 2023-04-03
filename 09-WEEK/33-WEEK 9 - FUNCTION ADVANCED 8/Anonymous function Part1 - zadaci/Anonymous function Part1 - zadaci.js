// INSTRUCTIONS: All tasks needs to be done as regular function and after that
// as anonymous function!!!

//     1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd”
// Output: true
//     1A. Modify previous task to check if it contains char or number "5".

// Input: “1bser9re”
// Output: false

//1.
// function checkGivenString(string) {
//   rez = (function () {
//     var counter = 0;
//     for (i = 0; i < string.length; i++) {
//       if (/[0-9]/.test(string[i])) {
//         counter++;
//       }
//       if (counter === 5) {
//         rez = true;
//       } else {
//         rez = false;
//       }
//     }
//     return rez;
//   })();

//   return rez;
// }
// console.log(checkGivenString("1b8952abd"));

//1A
function checkGivenString(string) {
  rez = (function () {
    var counter = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === "5") {
        counter++;
      }
      if (counter > 0) {
        rez = true;
      } else {
        rez = false;
      }
    }
    return rez;
  })();

  return rez;
}
console.log(checkGivenString("15b892ab5d"));

//     2. Write a function that in a given string replaces all the appearances
//     of the string ‘JS’ with ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replacesAllAppearances(string) {
  var rezult = (function () {
    var asterisk = "*";
    var newString = "";
    for (i = 0; i < string.length; i++) {
      if (string[i] === "J" || string[i] === "S") {
        newString += asterisk;
      } else {
        newString += string[i];
      }
    }
    return newString;
  })();
  return rezult;
}
console.log(replacesAllAppearances("Programming in JS is super interesting!"));

//     3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”
(function () {
  function insertGivenCharactrer(string, position, character) {
    var newString = [];
    var newStringCont = [];
    for (j = 0; j < position - 1; j++) {
      newString.push(string[j]);
    }
    var newString1 = newString.join("");

    for (i = position - 1; i < string.length; i++) {
      newStringCont.push(string[i]);
    }
    var newStringCont1 = newStringCont.join("");

    return newString1 + character + newStringCont1;
  }
  console.log(insertGivenCharactrer("Goo morning", 4, "d"));
})();

//     4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

// function deleteCharacterFromGivenPositionInString(string, position) {
//   var newString = [];
//   var newString1 = [];
//   for (i = 0; i < position; i++) {
//     newString.push(string[i]);
//   }

//   for (j = position + 1; j < string.length; j++) {
//     newString1.push(string[j]);
//   }

//   return newString.join("") + newString1.join("");
// }
// console.log(deleteCharacterFromGivenPositionInString("Goodd morning!", 3));

(function () {
  function deleteCharacterFromGivenPositionInString(string, position) {
    var newString = [];
    var newString1 = [];
    for (i = 0; i < position; i++) {
      newString.push(string[i]);
    }

    for (j = position + 1; j < string.length; j++) {
      newString1.push(string[j]);
    }

    return newString.join("") + newString1.join("");
  }
  console.log(deleteCharacterFromGivenPositionInString("Goodd morning!", 3));
})("Goodd morning!", 3);

//     5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

// function deleteEverySecondElement(array) {
//   newArray = [];
//   var counter = 0;
//   for (i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       newArray[counter] = array[i];
//       counter++;
//     }
//   }
//   return newArray;
// }
// console.log(deleteEverySecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

(function (array) {
  newArray = [];
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      newArray[counter] = array[i];
      counter++;
    }
  }
  console.log(newArray);
})([3, 5, 1, 8, 90, -4, 23, 1, 67]);
