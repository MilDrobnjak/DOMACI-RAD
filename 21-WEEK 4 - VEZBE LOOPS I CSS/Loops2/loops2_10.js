
// 10.	Write a program that inserts a given element e on the given position p in the array a.
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var e=78;
var p=3;
var niz1=[2, -2, 33, 12, 5, 8];
var niz2=[e];
var niz3=[niz1[0]];
var niz4=[];

for(i=niz1.length-p; i<niz1.length; i++)
{
    niz2=[niz2,niz1[i]];
}
for(y=1;y<p;y++)
{
    niz3=[niz3,niz1[y]];
}
    niz4=[niz3, niz2];
console.log("Arrey with inserts a given element: " + niz4);