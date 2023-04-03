// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!

// 6. Write a function that replaces the elements of the given array between two positions
// with their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
function replaceElementsBetweenTwoPositions(array, position1, position2) {
  var newArray = [];
  var index = 0;
  var newArray1 = [];
  var index1 = 0;
  var newArray2 = [];
  var index2 = 0;
  var newArray3 = [];
  for (i = 0; i < position1; i++) {
    newArray[index] = array[i];
    index++;
  }
  for (j = position1; j <= position2; j++) {
    newArray1[index1] = array[j] * 2;
    index1++;
  }
  for (k = position2 + 1; k < array.length; k++) {
    newArray2[index2] = array[k];
    index2++;
  }

  newArray3 = newArray.concat(newArray1);

  return newArray3.concat(newArray2);
}

console.log(
  replaceElementsBetweenTwoPositions([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6)
);

(function (array, position1, position2) {
  var newArray = [];
  var index = 0;
  var newArray1 = [];
  var index1 = 0;
  var newArray2 = [];
  var index2 = 0;
  var newArray3 = [];
  for (i = 0; i < position1; i++) {
    newArray[index] = array[i];
    index++;
  }
  for (j = position1; j <= position2; j++) {
    newArray1[index1] = array[j] * 2;
    index1++;
  }
  for (k = position2 + 1; k < array.length; k++) {
    newArray2[index2] = array[k];
    index2++;
  }

  newArray3 = newArray.concat(newArray1);

  console.log(newArray3.concat(newArray2));
})([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6);

//  7. Write a function that checks if every element
//  of the first array is contained in the second array.
//  Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function checksIfEveryElementOfTheFirstArrayIsContained(array1, array2) {
  var array1Sorted = array1.sort(function (a, b) {
    return a - b;
  });
  var array2Sorted = array2.sort(function (a, b) {
    return a - b;
  });
  for (i = 0; i < array1Sorted.length; i++) {
    if (array1Sorted[i] !== array2Sorted[i]) {
      return false;
    }
  }

  return true;
}
console.log(
  checksIfEveryElementOfTheFirstArrayIsContained(
    [3, 4, 1, 3],
    [8, 9, 3, 1, 11, 4, 3]
  )
);
//  8. Write a function that sorts an array of strings by the number
//   of appearances of the letter ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

function sortArrayByNumberOfAppearancesOfLetterA(array) {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var newArray = [];
  var newArray1 = [];
  var newArray2 = [];
  var newArray3 = [];
  for (i = 0; i < array.length; i++) {
    var counter = 0;
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] == "A" || array[i][j] == "a") counter++;
    }
    if (counter == 0) {
      newArray[a] = array[i];
      a++;
    }
    if (counter == 1) {
      newArray1[b] = array[i];
      b++;
    }
    if (counter == 2) {
      newArray2[c] = array[i];
      c++;
    }
    if (counter > 2) {
      newArray3[d] = array[i];
      d++;
    }
  }
  var result = newArray.concat(newArray1, newArray2, newArray3);
  return result;
}
console.log(
  sortArrayByNumberOfAppearancesOfLetterA([
    "apple",
    "tea",
    "amazing",
    "morning",
    "JavaScript",
  ])
);

(function (array) {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var newArray = [];
  var newArray1 = [];
  var newArray2 = [];
  var newArray3 = [];
  for (i = 0; i < array.length; i++) {
    var counter = 0;
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] == "A" || array[i][j] == "a") counter++;
    }
    if (counter == 0) {
      newArray[a] = array[i];
      a++;
    }
    if (counter == 1) {
      newArray1[b] = array[i];
      b++;
    }
    if (counter == 2) {
      newArray2[c] = array[i];
      c++;
    }
    if (counter > 2) {
      newArray3[d] = array[i];
      d++;
    }
  }
  var result = newArray.concat(newArray1, newArray2, newArray3);
  console.log(result);
})(["apple", "tea", "amazing", "morning", "JavaScript"]);

//  9. Write a function that prints out the date of the next day.
// Output:  25. 10. 2018.

function printNextDay() {
  var today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toDateString();
}
console.log(printNextDay());

//  10. Write a function that prints out the date of
//the previous day.
// Output:  23. 10. 2018.
function printPreviousDay() {
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toDateString();
}
console.log(printPreviousDay());

//11. Write a function that prints out an array
//of the numbers
//aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
//   78
//  111
//    4
// 4321

function printArrayAlignedFromRightSide(array) {
  var string = array.join().split(",");
  var max = 0;
  for (i = 0; i < array.length; i++) {
    if (string[i].length > max) {
      max = string[i].length;
    }
  }
  var newArray = [];
  for (j = 0; j < string.length; j++) {
    newArray[j] = " ".repeat(max - string[j].length) + string[j] + " \n";
  }
  var result = newArray.join("");
  return "\n" + result;
}
console.log(printArrayAlignedFromRightSide([78, 111, 4, 4321]));

(function (array) {
  var string = array.join().split(",");
  var max = 0;
  for (i = 0; i < array.length; i++) {
    if (string[i].length > max) {
      max = string[i].length;
    }
  }
  var newArray = [];
  for (j = 0; j < string.length; j++) {
    newArray[j] = " ".repeat(max - string[j].length) + string[j] + " \n";
  }
  var result = newArray.join("");
  console.log("\n" + result);
})([78, 111, 4, 4321]);
