// Task 1. Write a conditional statement to find the sign of product of three numbers.
// Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -
var a = -7;
if (a < 0) {
  console.log("The sign is -");
} else {
  console.log("The sign is +");
}

// Task 2. Write a conditional statement to find the largest of five numbers.
// Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0
var x = -5;
var y = -2;
var z = -6;
var k = 0;
var m = -1;
if (x > y && x > z && x > k && x > m) {
  console.log(x + " is the largest number");
} else if (x < y && y > z && y > k && y > m) {
  console.log(y + " is the largest number");
} else if (x < z && y < z && z > k && z > m) {
  console.log(z + " is the largest number");
} else if (x < k && y < k && z < k && k > m) {
  console.log(k + " is the largest number");
} else if (x < m && y < m && z < m && k < m) {
  console.log(m + " is the largest number");
}

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
var f = 0;
var g = -1;
var h = 4;
if (f > g && g > h && f > h) {
  console.log("Sorted number list " + f, g, h);
} else if (f > g && g < h && f > h) {
  console.log("Sorted number list " + f, h, g);
} else if (f < g && g > h && f > h) {
  console.log("Sorted number list " + g, f, h);
} else if (f < g && g > h && f < h) {
  console.log("Sorted number list " + g, h, f);
} else if (f > g && g < h && f < h) {
  console.log("Sorted number list " + h, f, g);
} else {
  console.log("Sorted number list " + h, g, f);
}

// Task 4. Write a program to check if the variable is a number
// and if it’s a number, check if it is divisible by 2.
// If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X
var t = 10;
var sum = t / 2;
if (isNaN(t)) {
  console.log("X");
} else if (t % 2 !== 0) {
  console.log("X");
} else {
  console.log(`Result is ${t}/2 = ${sum}`);
}

// Task 5. Write a program that compares two numbers and displays the larger.
// Display the result in the console.
var w = 50;
var t = 100;
if (w > t) {
  console.log(`${w} is greater than ${t}`);
} else {
  console.log(`${t} is greater than ${w}`);
}

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// 	Output : 60°C is 140 °F
var Celsius = 60;
var Fahrenheit = (9 * Celsius) / 5 + 32;
console.log(`${Celsius}°C is ${Fahrenheit}°F`);

// Task 7. Write a JavaScript program to get the difference between
// a given number and 13, if the number is greater than 13 return
// double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						Output : 38
var givenNumber = 32;
if (givenNumber <= 13) {
  console.log(13 - givenNumber);
} else if (givenNumber > 13) {
  console.log((givenNumber - 13) * 2);
}

// Task 8. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
// 	Sample Input: 12,5					Sample Input: 8,8
// 	Output : 17						Output : 48
var int1 = 8;
var int2 = 8;
if (int1 > int2 || int1 < int2) {
  console.log(int1 + int2);
} else if (int1 === int2) {
  console.log((int1 + int2) * 3);
}

// Task 9. Write a JavaScript program to check two given numbers
// and print “true” if one of the number is 50 or if their sum is 50.
// 	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
// 	Output : -				    Output : true				Output : true

var firstNumber = 40;
var secondNumer = 10;
if (
  firstNumber === 50 ||
  secondNumer === 50 ||
  firstNumber + secondNumer === 50
) {
  console.log(true);
} else {
  console.log("-");
}

// Task 10. Write a JavaScript program to check
// a given integer is within 20 of 100 or 400,
// and print range in which number belongs.

// Sample Input: 13			Sample Input: 34			Sample Input: 256
// 	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
var input = 340;
if (input < 20) {
  console.log("-");
} else if (input >= 20 && input <= 100) {
  console.log("20 <=> 100");
} else if (input >= 100 && input <= 400) {
  console.log("100 <=> 400");
}
