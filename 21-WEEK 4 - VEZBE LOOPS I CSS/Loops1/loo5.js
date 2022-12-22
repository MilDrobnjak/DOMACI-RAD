// 5.	Write a program which prints the elements of the following array as a single string.

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var sum = "";
var a = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
for (i = 0; i<a.length; i++) {
    sum += a[i]
}
console.log(sum)