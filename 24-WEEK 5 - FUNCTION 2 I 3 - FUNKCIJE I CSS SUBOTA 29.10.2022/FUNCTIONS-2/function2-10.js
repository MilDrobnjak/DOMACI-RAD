// 10.	 Write a function to get the
// first n characters and add “...” at
//  the end of newly created string.
function prviKarakter(string, n) {
    var k = "";
    for (let index = 0; index < n; index++) {
        k += string[index];
    }
    return k + "...";
}
console.log(prviKarakter("Neki novi tekst", (5)));