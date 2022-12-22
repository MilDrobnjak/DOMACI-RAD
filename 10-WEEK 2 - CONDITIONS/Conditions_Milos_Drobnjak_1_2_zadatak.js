// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console
// with the specified sign.
// Sample numbers: 3, -7, 2 
// Output: The sign is - 
var x = 3;
var y = -7;
var z = 2;
    if(x>0 && y>0 && z>0){
        console.log("The sign is +")
    }
    else if(x<0 && y>0 && z>0){
        console.log("The sign is -")
    }
    else if(x>0 && y<0 && z>0){
        console.log("The sign is -")
    }
    else if(x>0 && y>0 && z<0){
        console.log("The sign is -")
    }    
    else if(x<0 && y<0 && z<0){
        console.log("The sign is -")
    }
    else {
        console.log("The sign is +")
    }

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 
var a = -5
var b = -2
var c = -6
var d = 0
var e = -1
    if (a>b && a>c && a>d && a>e){
        console.log(a)
    }
    else if (b>a && b>c && b>d && b>e){
        console.log(b)
    }
    else if (c>a && c>b && c>d && c>e){
        console.log(c)
    }
    else if (d>a && d>b && d>c && d>e){
        console.log(d)
    }
    else {
        console.log(e)
    }
