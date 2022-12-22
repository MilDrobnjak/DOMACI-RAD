// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
var niz=[-3, 11, 5, 3.4, -8];

for(i=0; i < niz.length; i++) {
    if(niz[i]>0)
    {
       niz[i]*=2;
    }
}
console.log("2. ZADATAK: Multiplies every positive element of a given array "+niz);
