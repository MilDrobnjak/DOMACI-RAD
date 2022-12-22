// 9.	Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"
function hideEmail(email) {
    var rezultat = "";
    var index = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            index = i;
        }

    }
    for (var j = 0; j < email.length; j++) {
        if (j > 2 && j < index) {
            rezultat += "*";
        } else {
            rezultat += email[j];
        }
    }
    console.log(rezultat);
}
hideEmail("megddgdfgdfgsl@gmail.com");