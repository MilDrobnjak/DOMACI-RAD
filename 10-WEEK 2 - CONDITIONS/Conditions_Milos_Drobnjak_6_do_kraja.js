// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F

var c = 60;
var f = (9*c/5)+32;   
        console.log(c + " Celsius "  + " is " + f + " Fahrenheit" );

// Task 7. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						Output : 38
var x = 32;
var rezultat = 13 - x;
    if (x<=13)
     { 
    console.log(rezultat);
     }
    else if(x>13){
    console.log((x - 13) * 2) 
    }




// Task 8. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
// 	Sample Input: 12,5					Sample Input: 8,8
// 	Output : 17						Output : 48
var a = 12;
var b = 5;

    if(a!=b){
        console.log(a + b)
    }
    else if (a == b){
        console.log((a+b)*3)
    }

// Task 9. Write a JavaScript program to check two given numbers and print “true” 
//if one of the number is 50 or if their sum is 50.
// 	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
// 	Output : -				Output : true				Output : true
var s = 40;
var d = 10;
var z = s+d
    if (s === 50 || d === 50 || z === 50){
        console.log("true")
    }
    else {
        console.log("falce")
    }

// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13			Sample Input: 34			Sample Input: 256
// 	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
var g = 13;
    if (g<20)
    {
        console.log("-")
    }    

    else if (g>20 && g<100)
    {
        console.log("20<=>100")
    }
    else if (g>100 && g<400)
    {
        console.log("100<=>400")
    }
    else {
        console.log("-")
    }