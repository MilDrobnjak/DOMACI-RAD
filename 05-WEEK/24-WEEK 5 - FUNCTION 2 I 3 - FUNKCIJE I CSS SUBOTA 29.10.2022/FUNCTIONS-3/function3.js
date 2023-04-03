// Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to first pull changes done at class and push the new repository to remote when done with all the work at the end.

// Ignore this if git branching is not presented to you yet.
// 1.	Write a program to insert a string within a string at
// a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertString(string, inputString, position) {
  var newString = "";
  var index = 0;

  for (i = 0; i <= string.length; i++) {
    if (i < position) {
      newString += string[i];
    } else if (i === position) {
      newString += inputString;
    } else if (i > position) {
      var index = i - 1;
      newString += string[index];
      continue;
    }
  }
  return newString;
}
console.log(insertString("My random string", "JS", 11));

// 2.	Write a program to join all elements of the array
//into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]
function joinElements(array) {
  var newString = "";
  for (i = 0; i < array.length; i++) {
    if (
      array[i] === undefined ||
      array[i] === null ||
      isNaN(array[i]) === true ||
      array[i] === Infinity
    ) {
      continue;
    } else {
      newString += array[i];
    }
  }
  return newString;
}
console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 3.	Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
function filterFalsyValues(array) {
  var newArray = [];
  var p = 0;
  for (i = 0; i < array.length; i++) {
    if (!!array[i]) {
      newArray[p] = array[i];
      p++;
    }
  }
  return newArray;
}
console.log(
  filterFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null])
);
// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number
function reverseNumber(number) {
  var newNumber = "";
  number = String(number);
  for (i = number.length - 1; i >= 0; i--) {
    newNumber += number[i];
  }
  newNumber = Number(newNumber);
  return newNumber;
}
console.log(reverseNumber(1234));
console.log(typeof reverseNumber(1234));

// 5.	Write a function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]
function getLastElement(array, n) {
  var rez = [];
  var k = 0;
  if (n === undefined) {
    rez[0] = array[array.length - 1];
  } else if (n <= array.length) {
    for (i = array.length - n; i < array.length; i++) {
      rez[k] = array[i];
      k++;
    }
  } else {
    rez = "n is not valid number.";
  }
  return rez;
}
console.log(getLastElement([7, 9, 0, -2], 5));

// 6.	Write a function to create a specified number of elements
// with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function specNumOfElem(num, val) {
  var newArray = [];
  if (val === undefined) {
    for (i = 0; i < num; i++) {
      newArray[i] = null;
    }
  } else {
    for (i = 0; i < num; i++) {
      newArray[i] = val;
    }
  }
  return newArray;
}
console.log(specNumOfElem(2));

// 7.	Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number
// is a positive integer that is equal to the sum of its proper positive divisors,
// that is, the sum of its positive divisors excluding the number itself (also
// known as its aliquot sum). Equivalently, a perfect number is a number that
// is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper
// positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to
// half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
// perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect
// numbers 496 and 8128.
//perfektan broj = perfektan broj/2 (zbir svih brojeva do ovog broja koji
//su deljivi sa tim perfektnim brojem)
//for petlja i if uslov gde se koristi %
function chekIsNumPerfect(num) {
  var sum = 0;
  var rez = false;
  for (i = 0; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    } else {
      continue;
    }
  }
  if (sum === num) {
    rez = true;
  }
  return rez;
}
console.log(chekIsNumPerfect(6));

// 8.	Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
function findWord(string, word) {
  var stringToArray = [];
  var letterSum = "";
  var brojac = 0;
  var brojPojavljivanjaReci = 0;
  string = string + " ";
  for (i = 0; i <= string.length; i++) {
    if (string[i] != " ") {
      letterSum += string[i];
    } else {
      stringToArray[brojac] = letterSum;
      brojac++;
      letterSum = "";
      continue;
    }
  }

  for (i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] === word) {
      brojPojavljivanjaReci++;
    }
  }
  if (brojPojavljivanjaReci > 0) {
    rez = `${word} was found ${brojPojavljivanjaReci} times.`;
  } else {
    rez = `${word} was not found`;
  }
  console.log(stringToArray);
  return rez;
}

console.log(findWord("The quick brown fox", "fox"));

// 9.	Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(mail) {
  var hideMail = "";
  var index = "";
  for (i = 0; i < mail.length; i++) {
    if (mail[i] != "@") {
      hideMail += mail[i];
    } else {
      hideMail = "..." + mail[i];
    }
  }
  return hideMail;
}
console.log(hideEmail("drobnjak84@gmail.com"));
// // 10.	Write a program to find the most frequent item of an array.

// // [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
function mostFrequentItem(array) {
  var maxFrItem = 0;
  var freqElem;
  for (i = 0; i < array.length; i++) {
    var index = 0;

    for (j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        index++;
      }
      if (index > maxFrItem) {
        maxFrItem = index;
        freqElem = array[i];
      }
    }
  }
  return freqElem;
}
console.log(
  mostFrequentItem([
    3,
    "a",
    "a",
    "a",
    "a",
    3,
    3,
    ,
    3,
    2,
    3,
    "a",
    3,
    "a",
    2,
    4,
    9,
    3,
  ])
);
