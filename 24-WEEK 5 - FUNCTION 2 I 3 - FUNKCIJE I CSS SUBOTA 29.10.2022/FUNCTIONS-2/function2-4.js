// 4.	Write a function to count the number
// of letter occurrences in a string.
// "My random string", "n" -> 2
var k = 0;
function countNumb(string1, m) {
    for (j = 0; j < string1.length; j++) {
        if (string1[j] == m)
            k += 1;
    }
    return k;
}
console.log(countNumb("My random string", "n"));