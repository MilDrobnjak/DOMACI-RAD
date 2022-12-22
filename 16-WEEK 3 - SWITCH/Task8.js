// Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”)
// and prints out the appropriate result. Watch out for division by zero!
var x = 4;
var y = 2;
var operation = "*";

    switch (operation) {
        case "+":
        result = x + y;
        break;
        case "-":
        result = x - y;
        break;   
        case "*":
        result = x * y;
        break;
        case "/":
        result = x / y;
        break;       
        default :
        result = "Watch out for division by zero!";    

    }

    console.log(result);
