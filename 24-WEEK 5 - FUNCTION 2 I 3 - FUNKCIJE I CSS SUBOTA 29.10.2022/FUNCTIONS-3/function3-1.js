// 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"
function dodatiString(prviString, drugiSting, pozicija = 0) {
    var rezultat = "";
    var rezultat1 = "";
    for (var i = 0; i < pozicija; i++) {
        rezultat += prviString[i];
    }
    for (var j = pozicija; j < prviString.lenght; j++) {
        rezultat1 += prviString[j];
    }
    rezultat = rezultat + drugiSting + rezultat1;
    console.log(rezultat);
}
dodatiString("My random string", "JS", 10);
