// 1.	Write a function to check whether the `input` is 
// a string or not.

// "My random string" -> true
// 12 -> false

is_string = function (input) {
    if (Number(input))
        return false;
    else {
        return true;
    }
};
console.log(is_string('Neki niz'));
console.log(is_string((15)));
console.log(is_string('hfdhfghgdh'));
console.log(is_string((12)));
