// 6.	Write a program that checks if a given array is symmetric. 
// An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
var array = [2, 4, -2, 7, -2, 4, 2]
var rezultat = 0;
for(i=0; i<array.length; i++)
{
    rezultat=array[i]-array[array.length-1-i];
}
if(rezultat==0){
    console.log("The array is symmetric");
}
else {
    console.log("The array is not symmetric");
}