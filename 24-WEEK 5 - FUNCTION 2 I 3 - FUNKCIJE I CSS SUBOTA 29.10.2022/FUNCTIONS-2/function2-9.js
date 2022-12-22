// 9.	 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"
function zamena(string, znak) {
    if (znak) {
        string = string.replaceAll(" ", znak);
    } else {
        string = string.replaceAll(" ", "-");
    }
    return string;
}
console.log(zamena("neki tekst koji je napisan", "+"));