//1.	Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
let duplicateEachElement = function (array) {
  var newArr = [];
  for (i = 0; i < array.length; i++) {
    newArr.push(array[i]);
    newArr.push(array[i]);
  }
  return newArr;
};
console.log(duplicateEachElement([2, 4, 7, 11, -2, 1]));
//2.	Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13]
var removeAllDuplicatesInGivenArray = function (array) {
  var newArr = [];
  newArr = [...new Set(array)];
  newArr = newArr.sort((a, b) => a - b);
  return newArr;
};
console.log(removeAllDuplicatesInGivenArray([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
//    3.
//    a.	Write a function that checks if a given array has odd number of elements.
//    Input: [1, 2, 9, 2, 1]
//    Output: true
function checkIsOddNumber(array) {
  var odd = array.filter((num) => num % 2 === 1);
  return odd;
}
console.log(checkIsOddNumber([1, 2, 9, 2, 1]));
//    b.	Write a function that counts the number of elements less than the middle element.
// If the given array has an even number of elements, print out an error message.
//    Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//    Output: 4
function countNumberOfElementsInArray(array) {
  var counter = 0;
  var message = "Error!";
  var middleElement = array[0];
  if (array.length % 2 == 0) {
    message;
  } else {
    middleElement = array[(array.length - 1) / 2];
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] < middleElement) {
      counter++;
    }
  }
  return counter;
}
console.log(countNumberOfElementsInArray([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
//4.	Write a function that finds the smallest element of a given array.
//The function should return an object that contains the smallest value and its
// last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]
//Output:  { minValue: -2, minLastIndex: 6 }
function findSmallestElement(array) {
  var minimum = array[0];
  var object = {};
  for (i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  var minimumLastIndex = array.lastIndexOf(minimum);
  object.minValue = minimum;
  object.minimumLastIndex = minimumLastIndex;
  return object;
}
console.log(findSmallestElement([1, 4, -2, 11, 8, 1, -2, 3]));
//    5.
//    a.	Write a function that finds all the elements in
//          a given array less than a given element.
//          Input: [2, 3, 8, -2, 11, 4], 6
//          Output: [2, 3, -2, 4]
function lessThanGivenElement(array, element) {
  var array1 = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] < element) {
      array1.push(array[i]);
    }
  }
  return array1;
}
console.log(lessThanGivenElement([2, 3, 8, -2, 11, 4], 6));
//    b.	Write a function that finds all the elements in
//          a given array that start with the “pro” substring.
//          The function should be case insensitive.
//          Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
//          Output: [’Programming’, ‘product’]
function elementsInArrayStartWith(array, letters) {
  var lowerCaseArray = [];
  var result = [];
  for (i = 0; i < array.length; i++) {
    lowerCaseArray = array[i].toLowerCase();
    if (lowerCaseArray.slice(0, letters.length) == letters.toLowerCase()) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(
  elementsInArrayStartWith(
    ["JavaScript", "Programming", "fun", "product"],
    "pro"
  )
);
//c.	Write a function that expects an array and a callback
//function that filters out some of the elements.
//Use functions defined in a) or b) to test it.

function filtersOutSomeOfTheElements(array, callbackFunction) {
  var array1 = callbackFunction(array, "pro");
  console.log(array1);
}
filtersOutSomeOfTheElements(
  ["Programming", "profesor", "home", "function", "Professional"],
  elementsInArrayStartWith
);

//    6.
//    a.	Write a list (array) of products you usually buy in the supermarket.
// Write a price and name for each product. For example,
//        [
//    {name: ‘apples’, price: 100},
//    {name: ‘milk’, price: 80},
//    {name:’bananas’, price: 150}
//    ]
//    b.	Write a function that calculates the total price of your shopping list.
//    c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
//    d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.
var groceries = [
  { name: "apples", price: 100 },
  { name: "milk", price: 180 },
  { name: "bananas", price: 250 },
  { name: "bread", price: 100 },
  { name: "cheese", price: 500 },
  { name: "chocolate", price: 200 },
];
//    b.	Write a function that calculates the total price of your shopping list.
function calculatTotalPrice(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i].price;
  }
  return total;
}
console.log(calculatTotalPrice(groceries));
//    c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
function calculatAverageProductPriceOfListWithThreeDecimals(array) {
  var totalAverage = 0;
  for (i = 0; i < array.length; i++) {
    totalAverage = calculatTotalPrice(groceries) / array.length;
  }
  return totalAverage.toFixed(3);
}
console.log(calculatAverageProductPriceOfListWithThreeDecimals(groceries));
//    d.	Write a function that prints out the name of the most expensive product on your shopping list.
// Write the name in uppercase.
function mostExpensiveProduct(array) {
  var mostExPro = "";
  var mostExPrice = 0;
  for (i = 0; i < array.length; i++) {
    if (groceries[i].price > mostExPrice) {
      mostExPro = groceries[i].name;
      mostExPrice = groceries[i].price;
    }
  }
  return mostExPro.toUpperCase();
}
console.log(mostExpensiveProduct(groceries));
//    7.
//    a.	Write a function that checks if a given string is written in all capitals.
//    b.	Write a function that checks if a given string contains any digits.
//    c.	Write a function that checks if a given string is a valid hexadecimal color.
//    d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018.
//    e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

//a.Write a function that checks if a given string is written in all capitals.
function checksIsStringWrittenInCapitals(string) {
  var checker = string.toUpperCase();
  if (string === checker) {
    return true;
  } else return false;
}
console.log(checksIsStringWrittenInCapitals("NOVISAD"));
//b.Write a function that checks if a given string contains any digits.
function stringContainsAnyDigits(string) {
  var checker = /[0-9]/;
  if (checker.test(string)) return true;
  else return false;
}
console.log(stringContainsAnyDigits("Biciklo"));
//c.Write a function that checks if a given string is a valid hexadecimal color.
function checkIfStringIsValidHexadecimalColor(string) {
  var checker = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (checker.test(string)) return true;
  else return false;
}
console.log(checkIfStringIsValidHexadecimalColor("#fff"));
//d.Write a function that checks if a given number belongs to the interval from 1900 to 2018.
function checkIfGivenNumberBelongsToInterval(number) {
  if (number > 1900 && number < 2018) {
    return true;
  } else return false;
}
console.log(checkIfGivenNumberBelongsToInterval(1501));
//e.Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
function Validator(string, stringWihtNum, stringHex, year) {
  this.string = checksIsStringWrittenInCapitals(string);
  this.stringNum = stringContainsAnyDigits(stringWihtNum);
  this.color = checkIfStringIsValidHexadecimalColor(stringHex);
  this.year = checkIfGivenNumberBelongsToInterval(year);
}
var valid = new Validator("BICIKlO", "NoviS1ad", "#145883", 1984);
console.log(valid);

//    8.	Write a function that calculates a number of days to your birthday.
//    Input: 25 February
//    Output: 5 days
function numberOfDaysUntilBirthday(date) {
  var birthday = new Date(date);
  var today = new Date();
  var daysLeft = birthday.getTime() - today.getTime();
  daysLeft = Math.round(daysLeft / (24 * 60 * 60 * 1000));
  return daysLeft;
}
console.log(numberOfDaysUntilBirthday("01/10/2023"));
//    9.	Write a function that for a given departure and arrival time calculates the time the trip takes.
//        Input: 8:22:13 11:43:22
//        Output: 3 hours 21 minutes 9 seconds
function timeOfTrip(arrival, departure) {
  var time;
  var string = "";
  var periodArray = [];
  var timeArray = [arrival, departure];
  var sumArray = [];
  for (i = 0; i < timeArray.length; i++) {
    time = timeArray[i];
    time = time + ":";
    for (j = 0; j < time.length; j++) {
      if (time[j] != ":") {
        string += time[j];
      } else if (time[j] == ":") {
        periodArray.push(string);
        string = "";
      }
    }
    var hours = Number(periodArray[0]) * 3600;
    var minutes = Number(periodArray[1]) * 60;
    var seconds = Number(periodArray[2]);
    var sum = hours + minutes + seconds;
    periodArray = [];
    sumArray.push(sum);
  }
  var difference = sumArray[1] - sumArray[0];
  var newHour = Math.floor(difference / 3600);
  difference = difference - 3600 * newHour;
  var newMinutes = Math.floor(difference / 60);
  difference = difference - newMinutes * 60;
  var newSecond = difference;
  return `${newHour} hours ${newMinutes} minutes ${newSecond} Seconds`;
}
console.log(timeOfTrip("8:22:13", "11:43:22"));
//    10.
//a.Write a constructor function that creates points in space.
//Each point in space has its own x, y, and z coordinate.
//For example, (3, 5, 1) can be a point in space.
function PointInSpace(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}
var point = new PointInSpace(2, 7, 1);
console.log(point);
//b.Write a function that calculates the distance between two
// points in the space.
var point1 = new PointInSpace(1, 2, 4);
var point2 = new PointInSpace(4, 2, 5);
function distanceBetweenTwoPoints(point1, point2) {
  var distance = Math.sqrt(
    Math.pow(point1.x - point2.x, 2) +
      Math.pow(point1.y - point2.y, 2) +
      Math.pow(point1.z - point2.z, 2),
    2
  );
  return distance.toFixed(2);
}
console.log(distanceBetweenTwoPoints(point1, point2));
//    11.
//    a.	Write a function that generates a random integer value between 5 and 20.
//    b.	Write a function that generates a random integer value between 50 and 100.
//    c.	Write a function which expects a number and a callback generator function
//and returns an array of numbers produced by the generator function.

//    a.	Write a function that generates a
//random integer value between 5 and 20.
function randomIntegerValueBetweenFiveAndTwenty() {
  var random;
  random = Math.random() * 16 + 5;
  return Math.floor(random);
}
console.log(randomIntegerValueBetweenFiveAndTwenty());
//b.Write a function that generates a random integer value between 50 and 100.
function randomIntegerValueBetweenFiftyAndHundred(min, max) {
  var random1;
  random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  return random1;
}
console.log(randomIntegerValueBetweenFiftyAndHundred(50, 100));

//c.Write a function which expects a number and a callback generator function
//and returns an array of numbers produced by the generator function.
function generator() {
  return Math.floor(Math.random() * 1000);
}
function functionArrayOfRandomNumbers(number, funct) {
  var array = [];
  for (i = 0; i < number; i++) {
    array.push(funct());
  }
  return array;
}
console.log(functionArrayOfRandomNumbers(5, generator));
//12.Write a function that shuffles the elements of a given array.
//Input: [3, 6, 11, 2, 9, 1]
//Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)
function shufflesElementsOfArray(array) {
  var array1 = [];
  var i = 0;
  while (array1.length != array.length || array1.includes(undefined)) {
    var j = Math.floor(Math.random() * array.length);
    if (array1[j] != undefined) {
      continue;
    } else if (array1[j] == undefined) {
      array1[j] = array[i];
    }
    i++;
  }
  return array1;
}
console.log(shufflesElementsOfArray([3, 6, 11, 2, 9, 1]));
