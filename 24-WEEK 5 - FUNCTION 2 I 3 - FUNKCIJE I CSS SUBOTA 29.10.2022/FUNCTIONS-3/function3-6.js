// 6.	Write a function to create a specified number of elements with
//  pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function preFilledNumeric(array, n) {
    array = Array(n).fill(array);
    return array;
}
console.log(preFilledNumeric("teks", 7));
