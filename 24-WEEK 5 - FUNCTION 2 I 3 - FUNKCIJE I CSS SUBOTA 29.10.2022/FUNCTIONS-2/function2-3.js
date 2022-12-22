// 3.	Write a function that concatenates a 
// given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
        repeatedString += string;
        times--;
    }
    return repeatedString;
}
console.log(repeatStringNumTimes("Ha", 10));