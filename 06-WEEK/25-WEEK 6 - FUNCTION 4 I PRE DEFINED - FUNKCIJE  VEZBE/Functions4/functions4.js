// 1.	Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no
function checkGivenElement(array, element) {
  var rez = "no";
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      rez = "yes";
    }
  }
  return rez;
}
console.log(checkGivenElement([5, -4.2, 3, 7], 3));
// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
function multipliesEveryPositiveElement(array) {
  var newArray = [];

  for (i = 0; i < array.length; i++) {
    //var index = 0;
    if (array[i] < 0) {
      newArray[i] = array[i];
    } else {
      newArray[i] = array[i] * 2;
    }
  }
  return newArray;
}
console.log(multipliesEveryPositiveElement([-3, 11, 5, 3.4, -8]));

// 3.	Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
function findMinimumAndIndexOfMinimun(array, index) {
  var mini = 0;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        mini = array[i];
        index = i;
      }
    }
  }
  return `The minimum of a given array is ${mini}, and index is ${index}.`;
}

console.log(findMinimumAndIndexOfMinimun([4, 2, 2, -1, 6]));

// 4.	Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
function secondSmallestNumber(array) {
  var mini = array[0];
  var secondMini = array[1];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        mini = array[i];
      }
      if (array[i] > mini && array[i] < secondMini) {
        secondMini = array[i];
      }
    }
  }
  return secondMini;
}
console.log(secondSmallestNumber([4, 2, 2, -1, 6]));
// 5.	Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
function calculateSumOfPositiveElements(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(calculateSumOfPositiveElements([3, 11, -5, -3, 2]));
// 6.	Write a program that checks if a given array is symmetric.
// An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function isArraySimetric(array) {
  var rez = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] === array[array.length - 1]) {
      rez = "symmetric";
    } else {
      rez = "isn't symmetric";
      break;
    }
  }
  return rez;
}
console.log(isArraySimetric([2, 4, -2, 7, -2, 4, 2]));
// 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
function intertwinsTwoArrays(array1, array2) {
  var newArray = [];
  var m = 0;
  var k = 1;

  for (i = 0; i < array1.length; i++) {
    newArray[m] = array1[i];
    newArray[k] = array2[i];
    m += 2;
    k += 2;
  }
  return newArray;
}
console.log(intertwinsTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 8.	Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concTwoArrays(array1, array2) {
  var newArray = array1.concat(array2);
  return newArray;
}
console.log(concTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 9.	Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
function deletesGivenElement(array, element) {
  var newArray = [];
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      continue;
    } else {
      newArray[index] = array[i];
      index++;
    }
  }
  return newArray;
}
console.log(deletesGivenElement([4, 6, 2, 8, 2, 2], 2));
// 10.	Write a program that inserts a given element e on the given position p in the array a.
// If the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
function insertGivenElement(array, element, position) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (i != position) {
      newArray[i] = array[i];
    } else {
      newArray[i] = element;
      break;
    }
  }
  for (j = position + 1; j <= array.length; j++) {
    newArray[j] = array[j - 1];
  }
  return newArray;
}
console.log(insertGivenElement([2, -2, 33, 12, 5, 8], 78, 3));
