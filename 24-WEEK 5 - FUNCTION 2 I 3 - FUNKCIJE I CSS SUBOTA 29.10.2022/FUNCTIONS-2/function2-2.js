// 2.	Write a function to check whether 
//a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false
is_Blank = function (input) {
    if (input.length === 0)
        return true;
    else
        return false;
}
console.log(is_Blank('My random string'));
console.log(is_Blank(""));
console.log(is_Blank(12));
console.log(is_Blank(false));


