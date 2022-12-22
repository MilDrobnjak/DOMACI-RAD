// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number
function obrtanjeBrojeva(broj) {
    var brojUNiz = "" + broj;
    var rezultat = "";
    for (var index = brojUNiz.length - 1; index >= 0; index--) {
        rezultat += brojUNiz[index];
    }
    rezultat = +rezultat;
    console.log(rezultat);
}
obrtanjeBrojeva(123456789);


