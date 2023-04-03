// 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]
function convertStringToArrayOfNumbers(array) {
  var newArrey = [];
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == typeof "number") {
      newArrey[index] = array[i];
      index++;
    }
  }
  var arrOfNum1 = newArrey.map((str) => {
    return Number(str);
  });

  return arrOfNum1;
}

console.log(
  convertStringToArrayOfNumbers(["1", "21", undefined, "42", "1e+3", Infinity])
);
// 2.	Write a program to join all elements of the array into a string
// skipping elements that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

function joinAllElements(array) {
  var newArrey = [];
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (
      isNaN(array[i]) ||
      array[i] === undefined ||
      array[i] === null ||
      array[i] === Infinity ||
      array[i] === ""
    ) {
      continue;
    } else {
      newArrey[index] = array[i];
      index++;
    }
  }
  newArrey = newArrey.join("");
  return newArrey;
}
console.log(joinAllElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));
// 3.	Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function FalsyValues(array) {
  var newArrey = [];
  newArrey = array.filter(Boolean);
  return newArrey;
}

console.log(FalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null]));
// 4.	Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function calcNumOfIntegers(array) {
  var num = 0;
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      num++;
    } else {
      continue;
    }
  }
  return num;
}
console.log(calcNumOfIntegers([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
// 5.	Write a program that calculates a number of float values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
function numOfFloatValues(array) {
  var index = 0;

  for (i = 0; i < array.length; i++) {
    if (
      typeof array[i] === "number" &&
      !isNaN(array[i]) &&
      !Number.isInteger(array[i])
    ) {
      index++;
    }
  }
  //console.log(floatArray);

  return index;
}
console.log(numOfFloatValues([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
