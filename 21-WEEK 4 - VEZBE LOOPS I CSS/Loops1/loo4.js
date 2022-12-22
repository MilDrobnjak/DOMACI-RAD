//4.	Write a program to compute the sum and product of an array of integers.
var x = [2, 3, 5];
sum = 0;
product = 1;
for (i = 0; i< x.length; i+=1) {
    sum += x[i];
    product *= x[i];
}
console.log(sum);
console.log(product);


