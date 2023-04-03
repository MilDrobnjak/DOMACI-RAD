// 1.	 Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
//ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program pokrene.
function printTheQuoteOnThePage(array) {
  var i = Math.floor(Math.random() * array.length);
  console.log(array[i]);
}
printTheQuoteOnThePage([
  "Uradi ono što moraš, sa onim što znaš, tamo gde se nalaziš. Franklin Ruzvelt",
  "Život je ono što ti se dešava dok ti praviš planove za život. Džordž Lenon",
  "Život je kao ljubav sav razum je protiv njega, a sav zdrav instikt za njega. Samjuel Batler",
  "Kad dođeš na svet čitav svet se osmehuje, a ti plačeš. Vodi svoj život tako da na dan svoje smrti čitav svet plače, a ti budeš jedini koji će se smejati.  Konfučije",
  "Život je, izgleda, velika varalica, i prevari te najčešće baš onda kad misliš da imaš posla sa ozbiljnim stvarima. Marko Aurelije",
  "San je ono što se želi, a život je buđenje. Meša Selimović",
]);
// 2.	Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je prestupna.
//Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako nije deljiva sa 100 - 1900.
//nije bila prestupna). Od toga odstupa svaka četvrta godina veka
//(znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je prestupna).
function checkLeapYear(year) {
  if (year % 400 === 0) {
    console.log("godina je prestupna");
  } else if (year % 100 !== 0 && year % 4 === 0) {
    console.log("godina je prestupna");
  } else {
    console.log("godina nije prestupna");
  }
}
checkLeapYear(2020);
// 3.	Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima samoglasnika i
//koliko suglasnika.
function checkVowels(sentence) {
  sentence = sentence.toLowerCase();
  //console.log(sentence);
  var samoglasnici = ["a", "e", "i", "o", "u"];
  var suglasnici = [
    "b",
    "c",
    "č",
    "ć",
    "d",
    "dž",
    "đ",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "lj",
    "m",
    "n",
    "nj",
    "p",
    "r",
    "s",
    "š",
    "t",
    "v",
    "z",
    "ž",
  ];
  var brojSamoglasnika = 0;
  var brojSuglasnika = 0;
  for (i = 0; i < sentence.length; i++) {
    if (samoglasnici.includes(sentence[i])) {
      brojSamoglasnika++;
    } else if (suglasnici.includes(sentence[i])) {
      brojSuglasnika++;
    } else {
      continue;
    }
  }
  return `Broj samoglasnika u recenici je ${brojSamoglasnika}, a broj suglasnika je ${brojSuglasnika}`;
}
console.log(checkVowels("Napisati funkcijU koja za zadatu reč"));
// 4.	Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove podataka
//pojedinačnih elemenata ulaznog niza.
function funKojaPrihvataArrayIIspisujeNizSaTipovimaPodataka(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray[i] = typeof array[i];
  }
  return newArray;
}
console.log(
  funKojaPrihvataArrayIIspisujeNizSaTipovimaPodataka([
    "string",
    true,
    123,
    "fsdfds",
  ])
);

// 5.	Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu ispisuje
// samo stringove koji u sebi ne sadrže brojeve.
//Primer: ulazni niz [“12bb”, “pp”, “as23s”, “00sd”] => rezultat [“pp”].

// 6.	Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako string ima
// neparan broj znakova odnosno središnja dva karaktera ako ima paran broj znakova, indeks
// drugog ponavljanja drugog karaktera u formatu “@ Index # ” ili “not found” ako nema ponavljanja.
// Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] ,
// Primer 2: “Science" => [7, "S", "e", "e", "@ index 5"]
function stringInfo(string) {
  var newArray = [];
  newArray[0] = string.length;
  newArray[1] = string[0];
  newArray[2] = string[string.length - 1];
  string.length % 2 === 0
    ? (newArray[3] = string[string.length / 2 - 1] + string[string.length / 2])
    : (newArray[3] = string[(string.length - 1) / 2]);
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[1] && i != 1) {
      newArray[4] = `@ Index ${i}`;
      break;
    } else {
      newArray[4] = "not found";
    }
  }
  return newArray;
}
console.log(stringInfo("Science"));
// // 7.	Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// //bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja se ne ponavljaju.
function elementiKojiSeNePonavljaju(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (i != j) {
        if (array[i] === array[j]) {
          newArray.push(array[i]);
        }
      }
    }
  }
  var elements = array.filter(function (a) {
    return !newArray.includes(a);
  });
  return "[" + elements.join(", ") + "]";
}
var rezultat = elementiKojiSeNePonavljaju([
  9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8,
]);
console.log(rezultat);
// 8.	Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5],  N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]
function podelaNiza(array, n) {
  array = [2, 3, 4, 5];
  var newArray = array.slice(0, n);
  var newArray1 = array.slice(n, array.length);
  return (
    "[" +
    "[" +
    newArray.join(", ") +
    "]" +
    ", " +
    "[" +
    newArray1.join(", ") +
    "]" +
    "]"
  );
}
console.log(podelaNiza([2, 3, 4, 5], 2));
