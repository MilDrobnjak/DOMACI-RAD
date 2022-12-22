// 1.	Write a function that converts an array
// of strings into an array of numbers.
// Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]
function konvertovanjeStrUBroj(array) {
    var arraySaBrojevima = [];
    var j = 0;
    for (var ponavljac = 0; ponavljac < array.length; ponavljac++) {
        if (typeof array[ponavljac] === typeof "number") {
            arraySaBrojevima[j] = array[ponavljac];
            j++
        }
    }
    return arraySaBrojevima;
}
console.log(konvertovanjeStrUBroj(["1", "21", undefined, "42", "1e+3", Infinity]));
// 2.	Write a program to join all elements
// of the array into a string skipping elements 
// that are undefined, null, NaN or Infinity.

// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”
function pridruzivanjeElemenata(niz) {
    var noviNiz = "";
    for (let ponavljac = 0; ponavljac < niz.length; ponavljac++) {
        if (!isNaN(niz[ponavljac])) {
            if (niz[ponavljac] != Infinity) {
                if (niz[ponavljac] != null) {
                    if (niz[ponavljac] != undefined) {
                        noviNiz = noviNiz + niz[ponavljac];
                    }
                }
            }
        }

    }
    return noviNiz;
}
console.log(pridruzivanjeElemenata([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 3.	Write a program to filter out falsy values
// from the array.

// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]
function filterFalsy(niz) {
    var j = 0;
    var noviNiz = [];
    for (var ponavljac = 0; ponavljac < niz.length; ponavljac++) {
        if (typeof niz[ponavljac] == "number" && !isNaN(niz[ponavljac]) && niz[ponavljac] != 0) {
            noviNiz[j] = niz[ponavljac];
            j++;
        }

    }
    return noviNiz;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 4.	Write a program that calculates
// a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3
function brojInteger(niz) {
    var j = 0;
    var noviNiz = [];
    for (let ponavljac = 0; ponavljac < niz.length; ponavljac++) {
        if (Number.isInteger(niz[ponavljac])) {
            noviNiz[j] = niz[ponavljac];
            j++;
        }

    }
    return j;
}
console.log(brojInteger([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

// 5.	Write a program that calculates
// a number of float values in the array.

// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
function brojFloatVrednosti(niz) {
    var j = 0;
    var noviNiz = [];
    for (var ponavljac = 0; ponavljac < niz.length; ponavljac++) {
        if (Number(niz[ponavljac])) {
            if (!Number.isInteger(niz[ponavljac])) {
                noviNiz[j] = niz[ponavljac];
                j++;
            }
        }

    }
    return j
}
console.log(brojFloatVrednosti([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


