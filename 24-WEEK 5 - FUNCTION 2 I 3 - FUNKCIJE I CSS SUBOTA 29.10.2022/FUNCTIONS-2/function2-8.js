// 8.	Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function numberIsPrime(broj) {
    prostBroj = true;
    for (let index = 2; index < broj; index++) {
        if (broj % index == 0) {
            prostBroj = false;
            break;
        }
    }
    return prostBroj
}
console.log(numberIsPrime(5));