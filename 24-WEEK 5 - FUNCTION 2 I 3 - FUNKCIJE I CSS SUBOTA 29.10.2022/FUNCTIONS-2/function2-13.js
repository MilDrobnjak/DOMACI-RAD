// 13.	Write a function to humanize
//  a number 
//  (formats a number to a 
//     human-readable string) 
//     with the correct suffix such as 1st,
//      2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th
function humanizovanjeBrojeva(broj) {
    var rezultat = "";
    var prvih10 = broj % 10;
    var ostali = broj % 100;
    if (prvih10 === 1 && ostali !== 11) {
        rezultat = broj + "st";
    } else if (prvih10 === 2 && ostali !== 12) {
        rezultat = broj + "nd";
    } else if (prvih10 === 3 && ostali !== 13) {
        rezultat = broj + "rd";
    } else {
        rezultat = broj + "th";
    }
    console.log(rezultat);
}
humanizovanjeBrojeva(3);