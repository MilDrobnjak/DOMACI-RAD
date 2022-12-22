// 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]


array1=[4, 5, 6, 2];
array2=[3, 8, 11, 9];
array3=[];

for(f=0;f<array1.length;f++)
{
    array3=[array3, array1[f], array2[f]];
}
console.log("Intertwines two arrays is array " + array3)
