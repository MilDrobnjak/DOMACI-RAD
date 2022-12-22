// 6. Write a conditional statement to
// sort three numbers.
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
