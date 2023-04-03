// 1.	Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateListOfElem(array, k) {
  var newArray = [];
  for (i = k; i < array.length; i++) {
    newArray.push(array[i]);
  }
  for (j = 0; j < k; j++) {
    newArray.push(array[j]);
  }
  return newArray;
}
console.log(rotateListOfElem([1, 2, 3, 4, 5, 6], 2));
// 2.	Write a function that takes a number and returns array of its digits.

function returnArrayOfDig(number) {
  var arr = [];
  number = number.toString();
  for (i = 0; i < number.length; i++) {
    arr[i] = Number(number[i]);
  }
  return arr;
}
console.log(returnArrayOfDig(1234564));
// 3.	Write a program that prints a multiplication table for numbers up to 12.
function multiplicatonTable(number) {
  var sum = 0;
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
      sum = j * i;
      console.log(`${i} * ${j} = ${sum}`);
    }
  }

  return sum;
}
console.log(multiplicatonTable(12));
// 4.	Write a function to find the maximum element in array of numbers.
//Filter out all non-number elements.
function maxElement(array) {
  var newArray = [];

  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  var max = newArray[0];
  for (j = 0; j < newArray.length; j++) {
    if (newArray[j] > max) {
      max = newArray[j];
    }
  }

  return max;
}
console.log(maxElement([1, 2, true, 3, "string", 10, 4, 42, 5, 6]));
// 5.	Napisati funkciju koja vraca najveci I najmanji element niza.
//Rezultat prikazati kao niz.
function maxAndMinElementOfArray(array) {
  var max = array[0];
  var min = array[1];
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  return `Max element in array is ${max}, and min element is ${min}.`;
}
console.log(maxAndMinElementOfArray([1, 2, 3, 10, 4, 42, 5, 6]));
// 6.	Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza
// kada su brojevi poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata.
// Ako ima paran broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).
function medianaOfArray(array) {
  var arr = array;
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  var mediana = 0;

  if (arr.length % 2 != 0) {
    mediana = (arr.length + 1) / 2;
  } else {
    mediana = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
  console.log(arr);
  return mediana;
}
console.log(medianaOfArray([1, 51, 2, 78, 3, 10, 4, 42, 5, 15]));
// 7.	Write a function to find and return the first, middle and last element of an array
//if the array has odd number of elements. If number of elements is even, return just the
//first and the last. In other cases (empty array), input array should be returned.
function firstMiddleLastElement(array) {
  var newArray = [];
  if (array.length % 2 === 0 && array.length != 0) {
    newArray = `${array[0]}, ${array[array.length - 1]}`;
  } else if (array.length % 2 != 0) {
    newArray = `${array[0]},${array[(array.length - 1) / 2]}, ${
      array[array.length - 1]
    }`;
  } else {
    newArray = array;
  }

  return newArray;
}
console.log(firstMiddleLastElement([]));
// 8.	Write a function to find the average of N elements.
//Make the function flexible to receive dynamic number or parameters.
function averageOfElements() {
  var sum = 0;
  var average = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return (average = sum / arguments.length);
}
console.log(averageOfElements(1, 2, 3, 4));

// 9.	Write a function to find all the numbers greater than the average.
function greaterThenAverageOfElements() {
  var sum = 0;
  var average = 0;
  var newArray = [];
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    average = sum / arguments.length;
    console.log(average);
  }
  for (j = 0; j < arguments.length; j++)
    if (arguments[j] > average) {
      newArray.push(arguments[j]);
    }
  return newArray;
}
console.log(greaterThenAverageOfElements(1, 4, 12, 5, 2, 3, 4));
// 10.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms)
//to the square of the height (in meters). Write a function that takes two parameters,
// weight and height, computes the BMI, and prints the corresponding BMI category:
// 	Starvation: less than 15
// 	Anorexic: less than 17.5
// 	Underweight: less than 18.5
// 	Ideal: greater than or equal to 18.5 but less than 25
// 	Overweight: greater than or equal to 25 but less than 30
// 	Obese: greater than or equal to 30 but less than 40
// 	Morbidly obese: greater than or equal to 40
function computeBMI(weight, height) {
  var BMI = weight / (height * height);
  var BMIcategory = "";
  if (BMI < 15) {
    BMIcategory = "Starvation: less than 15";
  } else if (BMI > 15 && BMI < 17.5) {
    BMIcategory = "Anorexic: less than 17.5";
  } else if (BMI >= 18.5 && BMI < 25) {
    BMIcategory = "Ideal: greater than or equal to 18.5 but less than 25";
  } else if (BMI >= 25 && BMI < 30) {
    BMIcategory = "Overweight: greater than or equal to 25 but less than 30";
  } else if (BMI >= 30 && BMI < 40) {
    BMIcategory = "Obese: greater than or equal to 30 but less than 40";
  } else if (BMI >= 40) {
    BMIcategory = "Obese: greater than or equal to 30 but less than 40";
  }
  return BMIcategory;
}
console.log(computeBMI(90, 1.83));
// 11.	Write a function that takes a list of strings and prints them, one per line,
// in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function listOfStringPrintedInRectangularFrame(array) {
  var maxRec = array[0];
  var sum = "****";
  for (i = 0; i < array.length; i++) {
    if (array[i].length > maxRec.length) {
      maxRec = array[i];
    }
  }
  for (j = 0; j < maxRec.length; j++) {
    sum += "*";
  } //prvi red
  console.log(sum);
  var razmak = "";
  for (k = 0; k < array.length; k++) {
    razmak = "";
    for (m = 0; m < maxRec.length - array[k].length; m++) {
      razmak += " ";
    }
    var sum1 = "* " + array[k] + razmak + " *";
    console.log(sum1);
  } // unutrasnji redovi

  sum = "****";
  for (j = 0; j < maxRec.length; j++) {
    sum += "*";
  } //poslednji red
  console.log(sum);
}

listOfStringPrintedInRectangularFrame(["Hello", "World", "in", "a", "frame"]);
