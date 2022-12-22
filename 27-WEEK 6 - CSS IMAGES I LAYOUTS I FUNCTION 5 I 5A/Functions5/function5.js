// 1.	Find the min and max element in the following array and switch their places.
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// // Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
function minAndMaxElementAndSwich(array) {
  var min = Math.min(...array);
  var max = Math.max(...array);
  for (i = 0; i < array.length; i++) {
    if (array[i] === min) {
      array[i] = max;
    } else if (array[i] === max) {
      array[i] = min;
    }
  }
  return array;
}
console.log(minAndMaxElementAndSwich([3, 500, 12, 149, 53, 414, 1, 19]));

// 2.	Use the following array to make a new one by dividing its values by two and adding 5.
// If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function dividingByTwoAndAddingFife(array) {
  for (i = 0; i < array.length; i++) {
    array[i] = array[i] / 2 + 5;
    if (array[i] === 0) {
      array[i] = 20;
    }
  }
  return array;
}
console.log(dividingByTwoAndAddingFife([3, 500, -10, 149, 53, 414, 1, 19]));

// 3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
// Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
function studentsNamesWithTheirCorrGrade(array1, array2) {
  var zajedno = [];
  var grade = 0;
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (i === j) {
        if (array2[j] > 51 && array2[j] < 60) {
          grade = `${array1[i]} acquired ${array2[j]} points and earned 6`;
        } else if (array2[j] > 61 && array2[j] < 70) {
          grade = `${array1[i]} acquired ${array2[j]} points and earned 7`;
        } else if (array2[j] > 71 && array2[j] < 80) {
          grade = `${array1[i]} acquired ${array2[j]} points and earned 8`;
        } else if (array2[j] > 81 && array2[j] < 90) {
          grade = `${array1[i]} acquired ${array2[j]} points and earned 9`;
        } else if (array2[j] > 91 && array2[j] < 100) {
          grade = `${array1[i]} acquired ${array2[j]} points and earned 10`;
        } else if (array2[j] <= 50) {
          grade = `${array1[i]} acquired ${array2[j]} points and failed to complete the exam`;
        }
      }
    }
    zajedno += grade + ", ";
  }
  return zajedno;
}
console.log(
  studentsNamesWithTheirCorrGrade(
    ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
  )
);

// 4.	(skip :))Sort a previously defined array.
//Place its sorted values into a new array whose values
// are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

// 5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

// 6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts
// all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied
// by 12.5 and displayed in console.
// Output: 2350000
function addAllEvenNumAndSubAllOddNum(number) {
  var evenNumber = 0;
  var oddNumber = 0;
  for (i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evenNumber += i;
    }
  }
  for (j = 0; j <= number / 2; j++) {
    if (j % 2 != 0) {
      oddNumber += j;
    }
  }

  return (evenNumber - oddNumber) * 12.5;
}
console.log(addAllEvenNumAndSubAllOddNum(1000));

// 7.	Define a 10 element array. Take the first two letters from every string
// (that has at least 2 letters) in the array and create a new string from them.
// Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa
function takeTwoLettersFromEveryString(array) {
  var newArray = [];
  var newString = "";
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length >= 2) {
      newString += array[i].slice(0, 2);
    }
  }
  return newString;
}
console.log(
  takeTwoLettersFromEveryString([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);
// 8.	Write a program that takes a string and prints its characters
// out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
function printCharactersReversed(string) {
  var newString = "";
  for (i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
console.log(printCharactersReversed("Belgrade Institute of Technology"));
// 9.	Write a program that displays all the combinations
// of two numbers between 1 and 7. Don't display two of the
// same numbers at the same time. Display the number
// of possible combinations, as well. (E.g. (1.2),(2,1) is
// allowed, but not (1,1), (2,2)...).
function combinationsOfTwoNumbers(num, num1) {
  var comb = 1;

  for (i = 1; i <= num1; i++) {
    for (j = 1; j <= num1; j++) {
      if (i != j) {
        comb = i + "," + j;
      } else {
        continue;
      }
      console.log(comb);
    }
  }
}
combinationsOfTwoNumbers(1, 7);
// 10.	Write a program that checks if the entered number is a prime number
// (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false
function isNumPrime(number) {
  rez = "true";
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      rez = "false";
    }
  }
  return rez;
}
console.log(isNumPrime(11));
// 11.	Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true
// var nesto = "nut";
// var nesto1 = "a nut for a jar of tuna";
// var nes = nesto.concat(nesto1);
// console.log(nes);

function checkGivenStringIsPalindrome(string) {
  var newString = string.split("").reverse().join("").split(" ").join("");
  console.log(newString);
  string = string.split(" ").join("");
  newString = newString.split(" ").join("");
  if (newString == string) {
    return true;
  } else {
    return false;
  }
}
console.log(checkGivenStringIsPalindrome("a nut for a jar of tuna"));
// 12.	Write a program that calculates the greatest common divisor of two integers.
// Note: The greatest common divisor of two non-zero integers is the greatest
//positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9
function gratestCommonDivisor(num1, num2) {
  var rez = 0;
  for (i = 0; i < num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      rez = i;
    }
  }
  return rez;
}
console.log(gratestCommonDivisor(81, 9));
