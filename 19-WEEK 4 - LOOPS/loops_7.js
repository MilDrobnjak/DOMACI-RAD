// 7. Write a code to find on which index in array is letter "C" and show that index on screen. 
// Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2]. 
// ako je malo slovo c

var niz = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
    for (var i in niz) {
        if (niz[i] === "c") {
            console.log(i);
        }
        
    }
