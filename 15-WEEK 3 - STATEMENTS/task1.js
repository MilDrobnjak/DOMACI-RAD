// 1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.
//  Example: sides of triangle are 3, 4, 5. This is scalene triangle.
var x = 3;
var y = 4;
var z = 5;
    if (x==y && y==z)
    {
    console.log("This is Equilateral Triangle");
    }
    else if (x==y || y==z || z==x)
    {
    console.log("This is Isosceles Triangle");
    }
    else 
    {
    console.log("This is Scalene Triangle");
    }
