// 2.	Write a program to join all elements
// of the array into a string skipping
// elements that are
// undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]
function joinAllElements(array) {
    var rezultat = "";
    for (let index = 0; index < array.length; index++) {
        if (array[index] === null) {
            continue;
        } else if (isNaN(array[index])) {
            console;
        } else if (array[index] === undefined) {
            continue;
        } else if (array[index] === Infinity) {
            continue;
        } else {
            rezultat += array[index];
        }

    }
    console.log(rezultat);
}
joinAllElements([NaN, 0, 15, false, -22, '', undefined, 47, null]);