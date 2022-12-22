//1.	Write a program that calculates the maximum of two given numbers.
function maxOfTwoNum(first, second) {
  if (first > second) {
    maximum = first;
  } else {
    maximum = second;
  }
  return maximum;
}
console.log(maxOfTwoNum(13, 12));
//2.	Write a program that checks if a given number is odd.
function isNumOdd(number) {
  if (number % 2 !== 0) {
    rez = "num is odd";
  } else {
    rez = "num is even";
  }
  return rez;
}
console.log(isNumOdd(5));
//3.	Write a program that checks if a given number is a three digit long number.
function threeDigitLong(numero) {
  if (numero >= 100 && numero < 1000) {
    rezultat = "It's three digit long number";
  } else {
    rezultat = "Is's not three digit long number";
  }
  return rezultat;
}
console.log(threeDigitLong(100));
//4.	Write a program that calculates an arithmetic mean of four numbers.
function aritMean(num1, num2, num3, num4) {
  sum = (num1 + num2 + num3 + num4) / 4;
  return sum;
}
console.log(aritMean(1, 2, 3, 6));

// 5.	Write a program that draws a square of a given size.
// For example,  if the size of square is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****
function drawSquare(num) {
  var str = "";
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      if (i === 0 || i === num - 1) {
        str += "*";
      } else {
        if (j === 0 || j === num - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    str += "\n";
  }
  return str;
}
console.log(drawSquare(5));

// 6.   Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
function drawsHorizontalChart(num1, num2, num3) {
  var str = "";
  for (i = 0; i < num1; i++) {
    str += "*";
  }
  str += "\n";

  for (i = 0; i < num2; i++) {
    str += "*";
  }
  str += "\n";
  for (i = 0; i < num3; i++) {
    str += "*";
  }
  str += "\n";
  return str;
}
console.log(drawsHorizontalChart(9, 50, 11));
//7.	Write a program that calculates a number of digits of a given number.
function numOfDigits(numero) {
  var numToStr = "";

  for (i = 1; i <= numero; i++) {
    if ((numToStr = i)) {
    }
    rezult = numToStr.toString();
    r = rezult.length;
  }
  return r;
}
console.log(numOfDigits(125547));
// 8.	Write a program that calculates a number of
// appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
var array = [2, 4, 7, 8, 7, 7, 1, 7, 4, 5, 7, 77, 2];
function brojPojavljivanja(e) {
  var brojac = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === e) {
      brojac++;
    } else {
      continue;
    }
  }

  return brojac;
}
console.log(brojPojavljivanja(8));
//9.	Write a program that calculates the sum of odd elements of a given array.
var ar = [2, 4, 7, 8, 7, 7, 1, 3];
var suma = 0;

function sumOfOddElements(suma) {
  for (i = 0; i < ar.length; i++) {
    if (ar[i] % 2 !== 0) {
      suma += ar[i];
    } else {
      continue;
    }
  }
  return suma;
}
console.log(sumOfOddElements(suma));

// 10.	Write a program that calculates the number of appearances of a letter
// a in a given string. Modify the program so it calculates the number of
// both letters a and A.

function numOfApp(string) {
  var letter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      letter++;
    } else {
      continue;
    }
  }
  return letter;
}
console.log(numOfApp("appearancesabrakadabraA"));

// 11.	Write a program that concatenates a given string given number of times.
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function concatGivString(string, num) {
  var sum = "";
  for (i = 1; i <= num; i++) {
    sum += string;
  }
  return sum;
}
console.log(concatGivString("abc", 2));
