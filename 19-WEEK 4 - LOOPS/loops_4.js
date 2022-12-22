// 4. Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
var n = 5;
var even = "";
var sum = 0;
for (var i = 2; i<=n * 2; i++) {
    if (i%2===0) {
        even += "" + i;
        sum += i;
    }
}
console.log("Input number of terms - " + n);
console.log("The even numbers are: " + even);
console.log("Sum of " + n + " even natural number is " + sum);


        