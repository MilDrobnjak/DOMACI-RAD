// 6.	Write a function to find the position
//  of the last occurrence of a character in a string.
//  The result should be in human numeration form.
//  If there are no occurrences of the character,
// function should return -1.
function funkcijaZaPronalazenjePoslednjegSlova(tekst, slovo) {
    var mestoGdeSeNalaziSlovo = -1;
    for (let i = 0; i < tekst.length; i++)
        if (tekst[i] == slovo)
            mestoGdeSeNalaziSlovo = i;
    return mestoGdeSeNalaziSlovo;
}
console.log(funkcijaZaPronalazenjePoslednjegSlova("ovo je provera", "a")) 