// 5.Write a code to calculate the sum of digits in a number and show that sum on screen.
//  Example: "Sum of digits in number 232 is 7".
var x = 232;
var x1 = x.toString();
var sum = 0;
    for(var i=0; i < x1.length; i++ ) {
        sum += +x1[i];
    }
    console.log("Sum of digits in number " + x + " is " + sum)








