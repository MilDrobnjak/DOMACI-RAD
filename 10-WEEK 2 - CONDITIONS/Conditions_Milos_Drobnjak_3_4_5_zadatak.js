
// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 
var x = 0;
var y = -1;
var z = 4;
if (x>y && x>z && y>z){
    console.log(x,y,z);
}
else if(x>y && x>z && y<z){
    console.log(x,z,y);
}
else if(x<y && x>z && y>z){
    console.log(y,x,z);
}
else if(x<y && x<z && y>z){
    console.log(y,z,x);
}
else if(x>y && x<z && y<z){
    console.log(z,x,y);
}
else 
{
    console.log(z,y,x);
}


// Task 4. Write a program to check if the variable is a number and if it’s a number,
// check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X  
var m = 10;
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


// Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.
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

