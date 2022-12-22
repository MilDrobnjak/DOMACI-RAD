// 12.	 Write a function to calculate how
// many years there are left until
// retirement based on the year of birth.
// Retirement for men is at age of 65
// and for women at age of 60.
// If someone is already retired,
// a proper message should be
// displayed.
function godinaDoPenzije(godinaRodjenja, pol) {
    var rezultat = "";
    var godine = 2022 - godinaRodjenja;
    if (pol === "muskarac") {
        if (godine < 65) {
            rezultat = "Godine do penzije: " + (65 - godine);
        } else {
            rezultat = "Vec je u penziji";
        }
    }
    if (pol === "zena") {
        if (godine < 60) {
            rezultat = "Godine do penzije: " + (60 - godine);
        } else {
            rezultat = "Vec je u penziji";
        }
    }
    console.log(rezultat);
}
godinaDoPenzije(1984, "zena");