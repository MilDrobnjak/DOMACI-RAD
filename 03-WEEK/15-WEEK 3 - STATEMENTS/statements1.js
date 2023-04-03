// 1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.
// . Example: sides of triangle are 3, 4, 5. This is scalene triangle.
var a = 3;
var b = 4;
var c = 5;
if (a === b && b === c) {
  console.log("This is equilateral triangle");
} else if (a === b || a === c || b === c) {
  console.log("This is isosceles triangle");
} else {
  console.log("This is scalene triangle");
}

// 2. Perform arithmetic operations on two numbers.
// Operations are add, subtract, multiply, divide, modulus.
var num1 = 10;
var num2 = 2;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2);

// 3. Find the grade for input marks (you should have at least two input marks).
// Grades are:
// A (91-100), B (81-90), C (71-80), D (61-70), E (51-60).
// Optionally print if student has failed the exam.
var inputMarks1 = 50;
if (inputMarks1 > 50 && inputMarks1 <= 60) {
  console.log(`Grade with ${inputMarks1} is E`);
} else if (inputMarks1 > 60 && inputMarks1 <= 70) {
  console.log(`Grade with ${inputMarks1} is D`);
} else if (inputMarks1 > 60 && inputMarks1 <= 70) {
  console.log(`Grade with ${inputMarks1} is D`);
} else if (inputMarks1 > 70 && inputMarks1 <= 80) {
  console.log(`Grade with ${inputMarks1} is C`);
} else if (inputMarks1 > 80 && inputMarks1 <= 90) {
  console.log(`Grade with ${inputMarks1} is B`);
} else if (inputMarks1 > 90 && inputMarks1 <= 100) {
  console.log(`Grade with ${inputMarks1} is A`);
} else if (inputMarks1 < 51) {
  console.log(`Student failed the exam`);
}

// 4. Create two variables (or if you know how to do it - input fields).
// One should be a number, other should be a noun.
// Print on screen the number and pluralized form, like “5 cats” or “1 dog”.
// Bonus: Make it handle a few collective nouns like “sheep” and “geese”.
var n = 5;
var anim = "cats";
console.log(n + " " + anim);

// 5. Write a program to show you age based on
// entered number (if you know how to create input field,
// if not create variable and give it a value).
// If your age is 18 or older - print “You are old enough to drive”,
// but if not than print how many years you need to turn 18.
// If your age is greater than 18 - try one example with 13.
var age = 17;
if (age >= 18) {
  console.log("You are old enough to drive.");
} else if (age < 18) {
  console.log(
    `You are not old enough to drive, you need to wait ${
      18 - age
    } years and then you can drive.`
  );
}
// 6. This one will continue on task 5.
// Create one more variable (or input field) and compare it with your age.
// Show how much is that older/younger than you with text for example
// “He/She is 13 years older/younger than me”. If you are the same age - print
// that you are the same age.
var age1 = 38;
var age2 = 38;
if (age1 > age2) {
  console.log(`He is ${age1 - age2} years older than me.`);
} else if (age1 === age2) {
  console.log(`We are the same age.`);
} else {
  console.log(`I am ${age2 - age1} years older than he.`);
}

// 7. Create 5 variables (or input fields) with canine species.
// Create one more variable with canine and compare it with first 5 species.
// If it is match - write that on screen. Example: “This is German Shepherd called Neo”.
// If there is no match - write on screen that this is a mixed breed.
var canineSpecies1 = "Doberman";
var canineSpecies2 = "Pitbull";
var canineSpecies3 = "German Shepard";
var canineSpecies4 = "Labrador";
var canineSpecies5 = "Koker Spaniel";
var canineSpecies6 = "Labrador";
if (
  canineSpecies6 === canineSpecies1 ||
  canineSpecies6 === canineSpecies2 ||
  canineSpecies6 === canineSpecies3 ||
  canineSpecies6 === canineSpecies4 ||
  canineSpecies6 === canineSpecies5
) {
  console.log(`This is ${canineSpecies6} called Neo.`);
} else {
  console.log("This is a mixed breed.");
}
