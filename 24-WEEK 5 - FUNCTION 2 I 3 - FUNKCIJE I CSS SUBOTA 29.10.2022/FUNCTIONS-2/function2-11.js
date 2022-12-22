// 11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
function toNumArray(arr) {
    var result = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            continue;
        } else if (isNaN(arr[i])) {
            continue;
        } else if (arr[i] === undefined) {
            continue;
        } else if (arr[i] === Infinity) {
            continue;
        } else {
            result[counter] = +arr[i];
            counter++;
        }
    }
    console.log(result);
}

toNumArray(["1", "21", undefined, null, "42", "1e+3", Infinity]);