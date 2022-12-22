// 5.	Write a function to find the position of
// the first occurrence of a character in a string.
// The result should be the position of character. 
// If there are no occurrences of the character,
// the function should return -1.
function positionCar(string2, p) {
    var h = -1;
    for (l = 0; l < string2.length; l++) {
        if (string2[l] == p) {
            h = l + 1;
            break;
        }

    }
    return h;
}
console.log(positionCar("okpklop", "p"));
/////////////////////////

var string = 'neki tekst';

var searchTerm = 't';
var indexOfFirst = string.indexOf(searchTerm);
console.log(indexOfFirst);