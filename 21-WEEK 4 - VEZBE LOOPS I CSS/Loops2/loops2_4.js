// 4.	Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2
niz=[4, 2, 2, -1, 6];
var temp=1;

for (n=0; n<niz.length; n++)///////Bubble sort Implementation using Javascript/////
{ 
for(z=0; z<niz.length-n-1; z++)
{
 if (niz[z] > niz[z + 1])
{
    temp=niz[z];
    niz[z]=niz[z+1];
    niz[z+1]=temp;
}
}
}
console.log("4. ZADATAK: The first element larger than minimum is "+niz[1]);
