// 5.	Write a function to get the last element of an array.
//  Passing a parameter 'n' will return the last 'n' elements
//  of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  
function poslednji_elemenat_u_nizu(array, broj) {
    var rezultat = [];
    var j = 0;
    if (typeof broj === "undefined") {
        rezultat = array[array.length - 1];
    } else {
        for (var i = array.length - broj; i < array.length; i++) {
            rezultat[j] = array[i];
            j++
        }
    }
    console.log(rezultat);
}
poslednji_elemenat_u_nizu([7, 9, 0, -2], 3);



