//  1. Write a program that compares
//  two numbers and display the
//  larger. Result should be
//  displayed in the console.
var result = "";
var a = 3;
var b = 5;
    if (a>b) {
        result = a + " is greater then" + b
        }
    else {
        result = a + " is smaller then " + b
    }
    console.log(result)
 
    // 2. Write a program to check if the
    // number is divisible by 2. If it
    // is, print even, if not, print
    // odd.
    // Sample numbers: 3, 4, 9 (check one at the time)
    // Output: odd, even, odd
var result1 = "";
var x = 3;
var y = 4;
var z = 9;
    if(x %  2 == 0) {
        result1 = "even";
    }
    else {
        result1 = "odd";
    }
    console.log(result1)

    if(y %  2 == 0) {
        result1 = "even";
    }
    else {
        result1 = "odd";
    }
    console.log(result1)

    if(z %  2 == 0) {
        result1 = "even";
    }
    else {
        result1 = "odd";
    }
    console.log(result1)
    
    // 3. Write a program to check if the
    // number is divisible by 3 and 5.
    // If it is, print that number.
    // Sample numbers: 15, 12 (check one at the time)
    // Output: 15
var result2 = "";
var e = 15;
var o = 12;
    if(e % 3 == 0 && e % 5 == 0) {
        result2 = e + " number is divisible by 3 and 5"
    }
    else {
        result2 = ""
    }
    console.log(result2)
    
    if(o % 3 == 0 && o % 5 == 0) {
        result2 = e + " number is divisible by 3 and 5"
    }
    else {
        result2 = ""
    }
    console.log(result2)

    // 3. Write a conditional statement to
    // find the sign of product of
    // three numbers. Display the
    // result in the console with the
    // specified sign.
    // Sample numbers: 3, -7, 2
    // Output: The sign is -
    var q = 3;
    var w = -7;
    var e = 2;
        if (q>0 && w>0 && e>0) 
        {
            console.log("The sign is +");
        } 
                else if (q<0 && w<0 && e<0) 
                {
                    console.log("The sign is -");
                }
                else if (q<0 && w>0 && e<0)
                {
                console.log("The sign is +");
                }
                else if (q>0 && w<0 && e<0) 
                {
                console.log("The sign is +");
                }
                else if (q<0 && w<0 && e>0)
                {
                console.log("The sign is +")    
                }
                else
                {
                console.log("The sign is -");
                }
    
    // 4. Write a program to check if the
    // variable is a number. If it’s a
    // number, check if it is divisible
    // by 2. If it is, print the
    // result, if not, show “X”
    // Sample numbers: 10 | 7 (check one at the time)
    // Output: 10 / 2 = 5 | X
    
    var m = 11;
            if(typeof m === "number" && m%2 == 0) 
            {
            console.log(m/2)
            }
            else {
                console.log("X")
            }
            //OVDE JOS NESTO NEDOSTAJE
            //OVDE JOS NESTO NEDOSTAJE
            //OVDE JOS NESTO NEDOSTAJE
            //OVDE JOS NESTO NEDOSTAJE

    // 5. Write a conditional statement to
    // find the largest of five
    // numbers. Display the result in
    // console.
    // Sample numbers: -5, -2, -6, 0, -1
    // Output: 0
  
var g = -5;
var h = -2;
var j = -6;
var k = 0;
var l = -1;
    if (g>h && g>j && g>k && g>l)
    {
        console.log(g)
    }
    else if (h>g && h>j && h>k && h>l)
    {
        console.log(h)
    }    
    else if (j>g && j>h && j>k && j>l)
    {
        console.log(j)
    }
    else if (k>g && k>h && k>j && k>l)
    {
        console.log(k)
    }
    else 
    {
        console.log(l)
    }

    
