// 1.	Write a for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.
for (i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`This number is even ${i}`);
  } else {
    console.log(`This number is odd ${i}`);
  }
}

//2.	Write a program to sum the multiples of 3 and 5 under 1000.
var num = 0;
for (i = 1; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) num += i;
}
console.log(`Sum the multiples of 3 and 5 under 1000 is ${num}`);

//3.	Write a program that will iterate from 0 to 10 and display squares of numbers.
var squa = 0;
for (i = 1; i <= 10; i++) {
  squa = i * i;
  console.log(squa);
}

//4.	Write a program to compute the sum and product of an array of integers.
var a = [2, 3, 4, 5, 8];
var sum = 0;
var product = 1;
for (i = 0; i < a.length; i++) {
  sum += a[i];
  product *= a[i];
}
console.log(
  `The sum is ${sum} and product of an array of integers is ${product}.`
);
// 5.	Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var nArr = [];
for (i = 0; i < x.length; i++) {
  nArr += x[i];
}
console.log(nArr);

// 6.	Write a program that prints the elements of the following array.

// var a = [
// [1, 2, 1, 24],
// [8, 11, 9, 4],
// [7, 0, 7, 27]
// ];
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];
var reza = [];
for (i = 0; i < a.length; i++) {
  reza = reza + a[i] + ",";
}
console.log(reza);
//7.	Write a program that outputs
// the sum of squares of the first 20 numbers.
var sumOfSquares = 0;
var squ = 1;
for (i = 1; i <= 20; i++) {
  squ = i * i;
  sumOfSquares += squ;
}
console.log(sumOfSquares);

// 8.	Write a program that computes average marks
// of the following students. Then use this average
// to determine the corresponding grade.

// David	80
// Marko	77
// Dany	88
// John	95
// Thomas	68

// The grades are computed as follows :

// < 60%	F
// < 70%	D
// < 80%	C
// < 90%	B
// < 100%	A
var bodovi = [
  ["David", 80],
  ["Marko", 77],
  ["Dany", 88],
  ["John", 95],
  ["Thomas", 68],
];
var avMark = 0;
for (i = 0; i < bodovi.length; i++) {
  avMark = avMark + bodovi[i][1];
  var aver = avMark / bodovi.length;
}
console.log(`Average grade is ${aver}`);

if (aver < 60) {
  console.log("The grade is F");
} else if (aver > 60 && aver < 70) {
  console.log("The grade is D");
} else if (aver > 70 && aver < 80) {
  console.log("The grade is C");
} else if (aver > 80 && aver < 90) {
  console.log("The grade is B");
} else if (aver > 90 && aver < 100) {
  console.log("The grade is A");
} else {
  console.log("It is not a grade ");
}

// 9.	Write a program that uses console.log
// to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3),
// print "Buzz" instead. When you have that working, modify
// your program to print "FizzBuzz", for numbers that are
// divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).

for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else console.log(i);
}
