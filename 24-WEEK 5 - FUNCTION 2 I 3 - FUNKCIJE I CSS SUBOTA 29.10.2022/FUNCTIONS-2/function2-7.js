// 7.	Write a function to convert string into an array.
// Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function konvertovanjeStringa(string) {
    stringArray = string.split("");
    string = string.replaceAll(" ", null);
    return stringArray;
}
console.log(konvertovanjeStringa("Neki tekst"));

