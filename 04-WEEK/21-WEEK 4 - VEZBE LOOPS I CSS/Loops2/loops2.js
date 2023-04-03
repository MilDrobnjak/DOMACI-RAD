// 1.	Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no
var a = [5, -4.2, 18, 7];
var e = 3;
var rez = " ";
for (i = 0; i < a.length; i++) {
  if (a[i] === e) {
    rez = "yes";
    break;
  } else if (a[i] !== e) {
    rez = "no";
  }
}
console.log(rez);

// 2.	Write a program that multiplies every
// positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
var InArray = [-3, 11, 5, 3.4, -8];
var OuArray = [];
for (i = 0; i < InArray.length; i++) {
  if (InArray[i] < 0) {
    OuArray[i] = InArray[i];
  } else {
    OuArray[i] = 2 * InArray[i];
  }
}
console.log(OuArray);

// 3.	Write a program that finds the minimum
// of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
var arra = [4, 2, 2, -1, 6];
var min = [];
var ind = 0;
for (i = 0; i < arra.length; i++) {
  if (min > arra[i]) {
    min = arra[i];
    ind = i;
  }
}
console.log(`The minimum of a given array
is ${min} and and index is
${ind}.`);
// 4.	Write a program that finds the first element
// larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
var array1 = [4, 2, 2, -1, 6];
var min = [];
var theFirstElement = array1[0];
for (i = 0; i < array1.length; i++) {
  if (min > array1[i]) {
    min = array1[i];
  }
  for (j = 0; j < array1.length; j++) {
    if (array1[j] > min && array1[j] < theFirstElement) {
      theFirstElement = array1[j];
    }
  }
}
console.log(min, theFirstElement);

// 5.	Write a program that calculates the sum
// of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
var niz = [3, 11, -5, -3, 2];
var pozEle = [];
var sum = 0;
for (i = 0; i < niz.length; i++) {
  if (niz[i] > 0) {
    pozEle[i] = niz[i];
    sum += pozEle[i];
  }
}
console.log(pozEle, sum);

// 6.	Write a program that checks if a given
// array is symmetric. An array is symmetric if
// it can be read the same way both from the left
// and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.
var simArray = [2, 4, -2, 7, -2, 4, 2];
var rezul = "";
for (i = 0; i < simArray.length; i++) {
  if (simArray[i] === simArray[simArray.length - 1 - i]) {
    rezul = "simetrican";
  } else {
    rezul = "nije simetrican";
    break;
  }
}
console.log(rezul);

// 7.	Write a program that intertwines two arrays.
//You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var array3 = [];
for (i = 0; i < array1.length; i++) {
  array3[i] = array1[i] + ", " + array2[i];
}
console.log(array3);

// 8.	Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
var nizZaSpajanje1 = [4, 5, 6, 2];
var nizZaSpajanje2 = [3, 8, 11, 9];
var spojeniNiz = [nizZaSpajanje1 + "," + nizZaSpajanje2];
console.log(spojeniNiz);

// 9.	Write a program that deletes a given
//element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var nizBezE = [];
var index = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] === e) {
    continue;
  } else {
    nizBezE[index] = a[i];
    index++;
  }
}
console.log(nizBezE);

// 10.	Write a program that inserts a given element
// e on the given position p in the array a.
// If the value of the position is greater than the
// array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var eVar = 78;
var pVar = 7;
var aVar = [2, -2, 33, 12, 5, 8];
var aNiz = [];
var index1 = 0;
if (pVar <= aVar.length) {
  for (i = 0; i <= aVar.length; i++) {
    if (i === pVar) {
      aNiz[i] = eVar;
    } else {
      aNiz[i] = aVar[index1];
      index1++;
    }
  }

  console.log(aNiz);
} else {
  console.log("Error");
}
