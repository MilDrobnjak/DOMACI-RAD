// 5.	Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
var array = [3, 11, -5, -3, 2]
var a = 0
for(i=0; i<array.length; i++) {
    if(array[i]>0) {
        
    a=a+array[i]
    }
}
console.log(a)