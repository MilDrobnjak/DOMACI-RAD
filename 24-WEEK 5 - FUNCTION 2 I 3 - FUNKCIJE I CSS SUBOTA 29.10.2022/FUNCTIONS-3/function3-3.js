// 3.	Write a program to filter out 
// falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
function filter(array) {
    var rezultat = [];
    var j = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]) {
            rezultat[j] = array[index];
            j++
        }
    }
    console.log(rezultat);
}
filter([NaN, 0, 15, false, -22, "", undefined, 47, null]);