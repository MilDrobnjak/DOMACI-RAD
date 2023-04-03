"use strict";
// 1.	Write a function that capitalizes the first letter of each string argument it receives.
// 	Function arguments: ['hello', 'there', 'ES', 6]
// 	Output: ['Hello', 'There', 'ES']

const capitalizeFirstLetter = function (array) {
  return array
    .filter((word) => typeof word === "string")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1));
};

console.log(capitalizeFirstLetter(["hello", "there", "ES", 6]));

// 2.	Write a function that calculates sale tax that should be paid
//for the product of the given price. Use a constant to set a fixed
//value of the tax rate (i.e. 20% in Serbia).
// 	Input: [{ name: “Banana”, price: 120 },
// {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 },
// { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only

function calculateTax(array) {
  var tax = 0.2;
  var output = array.map((object) => object.price * tax);
  for (var object of array) {
    object.price += object.price * tax;
  }
  return [array, output];
}
var [array, output] = calculateTax([
  { name: "Banana", price: 120 },
  { name: "Orange", price: 100 },
]);
console.log(array);
console.log(output);

// 3.	Write a function that increases each element of the given array
// by the given value. If the value is omitted, increase each element of
// the array by 1.
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]
function increaseEachElement(arr, value) {
  return arr.map((num) => {
    if (value == undefined) {
      return ++num;
    } else {
      return (num += value);
    }
  });
}
console.log(increaseEachElement([4, 6, 11, -9, 2.1], 2));
console.log(increaseEachElement([6, 8, 13, -7, 4.1]));

// 4.	Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]
const filterEven = function (array) {
  return array.filter((number) => number % 2 == 0);
};
console.log(filterEven([6, 11, 9, 0, 3]));

// 5.	Write a function that filters all the strings from the given
//array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard',
// 'linter']
// 	Output: ['babel.js, 'JS standard']
const filterAllStringWithJS = function (array) {
  return array.filter((word) => word.toLowerCase().includes("js"));
};
console.log(
  filterAllStringWithJS([
    "compiler",
    "transpiler",
    "babel.js",
    "JS standard",
    "linter",
  ])
);

// 6.	Write a function that filters all integer numbers from the given
// array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]
const filterAllIntegerNum = function (array) {
  return array.filter((number) => number === Number.parseInt(number));
};
console.log(filterAllIntegerNum([1.6, 11.34, 9.23, 7, 3.11, 8]));

// 7.	Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// 	Output: [45, 553]
const filterIntegerContain5 = function (...array) {
  return array.filter((number) => {
    if (number === Number.parseInt(number)) {
      let numString = number + "";
      if (numString.split("").includes("5")) return number;
    }
  });
};
console.log(filterIntegerContain5(23, 11.5, 9, "abc", 45, 28, 553));

// 8.	Write a function that returns indexes of the elements greater
//than 10.
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: [1, 2, 5]
const returnIndex = function (array) {
  return array.reduce((acc, number, i) => {
    if (number > 10) acc.push(i);
    return acc;
  }, []);
};
console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));

// 9.
// a.	Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals.
// b.	Write a function that prints out the names of persons older than 25.
// c.	Write a function that check if there is a person older than 40.
// d.	Write a function that checks if all persons are older than 20.
const firstName = "Maria";
const age = 32;

const persons = [
  { firstName: "John", age: 17 },
  { firstName, age },
  { firstName: "Jack", age: 38 },
  { firstName: "Kim", age: 58 },
];

const displayPeopleOlderThan25 = function (array) {
  return array.filter((person) =>
    person.age > 25 ? console.log(person.firstName) : ""
  );
};
displayPeopleOlderThan25(persons);

const isSomeoneOlderThan40 = function (array) {
  return array.some((person) => person.age > 40);
};
console.log(isSomeoneOlderThan40(persons));

const isEveryoneOlderThan20 = function (array) {
  return array.every((person) => person.age > 20);
};
console.log(isEveryoneOlderThan20(persons));

// 10.	Write a function that checks if the given array is an array of
// positive integer values.
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes
// 	Input: [3, -12, 4, 11]
// 	Output: no

function checkGivenArrayPositiveInteger(array) {
  if (array.every((num) => num === Number.parseInt(num) && num > 0)) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(checkGivenArrayPositiveInteger([3, 11, 9, 5, 6]));
console.log(checkGivenArrayPositiveInteger([3, -11, 9, 5, 6]));

// 11.	Write a function that calculates the product of the elements of
// the array.
// Input: [2, 8, 3]
// Output:  48
const displayProductOfElements = function (array) {
  return array.reduce((acc, number) => (acc *= number), 1);
};
console.log(displayProductOfElements([2, 8, 3]));
console.log(displayProductOfElements([7, 11, 24, 1, 74.2, 8, 3]));

// 12.	Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// 	Output: 8
const maxValue = function (array) {
  return Math.max(...array);
};
console.log(maxValue([2, 7, 3, 8, 5.4]));
