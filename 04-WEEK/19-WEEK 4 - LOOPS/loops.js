//1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var sum = 0;
for (i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//2. Write a code to display the cube of the number up to given an integer and show it on screen.
// Example: 2 up to cube equals 8.
var x = 2;
var cube = 1;
for (i = 0; i < 3; i++) {
  cube = cube * x;
}
console.log(cube);

//3. Write a code to calculate the factorial
//of a given number and show it on screen.
//Example: The Factorial of 5 is 120.
var y = 6;
var factor = 1;
for (i = 1; i <= y; i++) {
  factor = factor * i;
}
console.log(factor);

// 4. Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
var b = 5;
var suma = 0;
for (i = 1; i <= b; i++) {
  parniBrojevi = 2 * i;
  suma = suma + parniBrojevi;
  console.log(parniBrojevi);
}
console.log(suma);

//5.Write a code to calculate the sum of digits in a number and show that sum on screen.
//Example: "Sum of digits in number 232 is 7".
var n = 232;
var numb = n.toString();
var sumaSum = 0;
for (i = 0; i < numb.length; i++) {
  sumaSum += +numb[i];
}
console.log(sumaSum);

// 6. Write a code to count all letters in a word and show that count on screen.
// Example: Given word is "Eclip542se".
// Result should be something like "There is 7 letters in this word".
var word = "Eclip542se";
var rez = 0;

for (i = 0; i < word.length; i++) {
  if (Number(word[i])) {
    continue;
  } else {
    rez++;
  }
}
console.log(`There is ${rez} letters in this word`);

// 7. Write a code to find on which index in
// array is letter "c" and show that index on screen.
// Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].
var ar = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
var letter = "c";
var ind = 0;
for (i = 0; i <= ar.length; i++) {
  if (ar[i] == letter) {
    i += 1;
    console.log(i);
  }
}
