// 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes


function proveraElemenata(array, element) {
    var rezultat = "";
    for (var index = 0; index < array.length; index++) {
        if (array[index] === element) {
            rezultat = "yes";
            break;
        }
        rezultat = "no";
    }
    return rezultat;
}
var array = [5, -4.2, 18, 3, 7];
var element = 3;
var func = proveraElemenata(array, element);
console.log(func);

// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function checkElement(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray[i] = array[i] * 2;
        } else {
            newArray[i] = array[i];
        }
    }
    return newArray;
}
var func = checkElement(array);
console.log(func);

// 3.	Write a program that finds the minimum of
// a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function getMin(arr, n) {
    var res = arr[0];

    for (let i = 1; i < n; i++)
        res = Math.min(res, arr[i]);

    return res;
}
var arr = [4, 2, 2, -1, 6];
var n = arr.length;

console.log(getMin(arr, n));

// 4.	Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
var arr = [4, 2, 2, -1, 6];
var n = arr.length;
arr.sort();

console.log("second smallest element is " + arr[1]);

// 5.	Write a program that calculates the sum of
// positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
function calcPositiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}
var a = [3, 11, -5, -3, 2];
calcPositiveSum(a);

// 6.	Write a program that checks if a given
// array is symmetric. An array is symmetric 
// if it can be read the same way both from the
// left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
function daLiJeSimetrican(array) {
    var rezultat = "";
    var unazad = array.length - 1;

    for (let index = 0; index < array.length; index++) {
        if (array[index] !== array[unazad]) {
            rezultat = "Nije simetrican.";
        } else {
            rezultat = "Simetrican je.";
        }
        unazad--;
    }
    console.log(rezultat);
}
daLiJeSimetrican([2, 4, -2, 7, -2, 4, 2]);

// 7.	Write a program that intertwines two arrays. 
// You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
function preplitanjeNiza(ar1, ar2) {
    var rezult = [];
    var m = 0;
    var k = 1;

    for (let index1 = 0; index1 < ar1.length; index1++) {
        rezult[m] = ar1[index1];
        rezult[k] = ar2[index1];
        m += 2;
        k += 2;
    }
    console.log(rezult)
}
preplitanjeNiza([4, 5, 6, 2], [3, 8, 11, 9]);

// 8.	Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
const arr1 = [4, 5, 6, 2];
const arr2 = [3, 8, 11, 9];
const spojeno = arr1.concat(arr2);
console.log(spojeno);

// 9.	Write a program that deletes a given
// element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
function brisanjeIzNiza(array, n) {
    var index = array.indexOf(n);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
var rezultat = brisanjeIzNiza([4, 6, 2, 8, 2, 2], 2);
console.log(rezultat);

// 10.	Write a program that inserts a given
// element e on the given position p in the array a.
// If the value of the position is greater than the
// array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
function insertElement(element, pozicija, niz) {
    var rezultat = [];
    if (pozicija > niz.length) {
        rezultat = "Error";
    } else {
        for (let index = 0; index < niz.length; index++) {
            if (index !== pozicija) {
                rezultat[index] = niz[index];
            } else {
                rezultat[index] = element;
                break;
            }
        }
        for (var j = pozicija + 1; j <= niz.length; j++) {
            rezultat[j] = niz[j - 1];
        }

    }
    console.log(rezultat);
}
insertElement(78, 3, [2, -2, 33, 12, 5, 8]);

