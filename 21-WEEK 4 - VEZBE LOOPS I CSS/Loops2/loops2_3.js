// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
niz2=[4, 2, 2, -1, 6];
b=niz2[0];
index=0;

for(var d=1; d<niz2.length; d++)
{
    if(niz2[d]<b){
        b=niz2[d];
        index=d;
    }
}
console.log("3. ZADATAK: Minimum of a given array is " +b+" with index "+index);

