// 1.	Create a function that takes an array of objects (groceries) which calculates the total price and
// returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
var groceries = 
    [{
        "product":"Milk",
        "quantity": 1,
        "price": 1.50
        },
    {
        "product":"Salt",
        "quantity": 1,
        "price": 2
        },
    {
        "product":"Flour",
        "quantity": 3,
        "price": 1
        },
    {
        "product":"Sugar",
        "quantity": 1,
        "price": 2.50
        },
    {
        "product":"Coffee",
        "quantity": 3,
        "price": 0.50
        },
    {
        "product":"Fish",
        "quantity": 3,
        "price": 5.50
        },
    {
        "product":"Vegetables",
        "quantity": 10,
        "price": 1
        }
]

function calcTotalPrice(groceries) {
var result = 0;
for (i=0; i <groceries.length; i++) {
result += groceries[i].quantity * groceries[i].price
 }
 console.log(`Total price of all groceries is ${result} euro.`)
}
calcTotalPrice(groceries)

// 2.	You go to a jewelry shop and try to find the most expensive piece of jewelry.
// You write down the name of each piece of jewelry and its price. Create a function 
//that gets the name of the piece of jewelry with the highest price and returns
// "The most expensive one is the {name of jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250}, …])
// 	- The most expensive one is the diamond Ring.

function mostExpensiveJewelry(jewelry) {
    var price = jewelry[0].price;
    var result = jewelry[0].name;
    
    for ( i=0;i<jewelry.length;i++) {
        if (jewelry[i].price>price) {
            result = jewelry[i].name;
        } 
    }
    console.log(`The most expensive jewelry is ${result}.`);
}
mostExpensiveJewelry([
    {
        name: "diamond necklace",
        price: 120000
    },
    {
        name: "diamond ring",
        price: 12000
    },
    {
        name: "gold ring",
        price: 1200 
    },
    {
        name: "golden watch",
        price: 5200
    },
    {
        name: "diamond bracelet",
        price: 100000
    },
])
// 3.Given a word, create an object that stores the indexes
// of each letter in an array. Make sure the letters are the keys.
// Make sure the letters are symbols. Make sure the indexes are
// stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
function mapLetters(word) {
    debugger
    var result = {};
    var positon = [];
    for (i=0; i<word.length; i++) {
        var letter = word[i];
        for (j=0;j<word.length;j++) {
            if(word[j]===letter) {
                positon[positon.length]=j
            }
        }
        result[word[i]] = positon;
        positon = [];
    }
console.log(JSON.stringify(result))
}
mapLetters("grapes")
// 4.	And who cursed the most in the fight between you and your
// spouse? Given an object with three rounds, with nested objects
//as your scores per round, return a string of who cursed the most:
// If you, return "ME!" If your spouse, return "SPOUSE!" If a draw,
// return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    spouse: 10  },
// {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse: 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"
//
function determineWhoCursedTheMost(cursed) {
    var resultMe = 0;
    var resultSpouse = 0;
    var rez = "";
    for (i = 0; i < cursed.length; i++) {
      resultMe += cursed[i].me;
      resultSpouse += cursed[i].spouse;
    }
    if (resultMe == resultSpouse) {
      rez = "DRAW!";
    } else if (resultMe < resultSpouse) {
      rez = "SPOUSE!";
    } else if (resultMe > resultSpouse) {
      rez = "ME!";
    }
  
    console.log(`Who cursed the most: ${rez}`);
  }
  determineWhoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 9, spouse: 44 },
    { me: 10, spouse: 55 },
  ]);
// 5.	Create a function that converts color in RGB
// format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"

var rgbToHex = function (rgb) {
    var { red, green, blue } = rgb;
    var hex = `#${red.toString(16).padStart(2, "0")}${green
      .toString(16)
      .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
    return hex;
  };
  console.log(rgbToHex({ red: 0, green: 145, blue: 54 })); // '#0033ff'
  
  function rgbToHex1(rgb) {
    var coef;
    var number;
    var string = "";
    var coefArr = [];
    var hexArr = [];
    var rgbArr = [rgb.red, rgb.green, rgb.blue];
    for (i = 0; i<rgbArr.length; i++) {
      if (rgbArr[i] < 0 || rgbArr[i > 255]) {
        return `Invalid`;
      }
      if (Math.round(rgbArr[i]) == 0) {
        hexArr[hexArr.length] = "0" + Math.round(rgbArr[i]);
      } else {
        number = Math.round(rgbArr[i]);
        while (number / 16 != 0) {
          coefArr[coefArr.length] = number % 16;
          number = parseInt(number / 16);
        }
        if (coefArr.length == 1) {
          coefArr.push(0);
        }
        for (j = coefArr.length - 1; j >= 0; j--) {
          switch (coefArr[j]) {
            case 10:
              coef = "a";
              break;
            case 11:
              coef = "b";
              break;
            case 12:
              coef = "c";
              break;
            case 13:
              coef = "d";
              break;
            case 14:
              coef = "e";
              break;
            case 15:
              coef = "f";
              break;
            default:
              coef = coefArr[j];
          }
          hexArr[hexArr.length] = coef;
        }
        coefArr = [];
      }
    }
    for (k = 0; k < hexArr.length; k++) {
      string += hexArr[k];
    }
    return "#" + string;
  }
  console.log(rgbToHex1({ red: 0, green: 145, blue: 54 }));

// 6.	Create a function that takes an amount of monetary
// change (e.g. 47 cents) and breaks down the most
// efficient way that change can be made using USD quarters,
// dimes, nickels and pennies.
//Your function should return an object.
// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25
// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

function makeChange(money) {
    money = money / 100;
    var Quarter = 0.25;
    var Dime = 0.1;
    var Nickel = 0.05;
    var Penny = 0.01;
    var changeArray = [ Quarter, Dime, Nickel, Penny];
    var nameArray = ["Quarter", "Dime", "Nickel", "Penny"];
    var object = {};
    for (i = 0; i<changeArray.length;i++) {
      object[nameArray[i]] = Math.floor(money/changeArray[i]);
      money = Math.round((money%changeArray[i])*100)/100;
    }
    return object
  }
  console.log(makeChange(47));
  console.log(makeChange(24));
  console.log(makeChange(92));


// 7.	Create a function that takes an array of objects like
// { name: "John", notes: [3, 5, 4]}
//and returns an array of objects like
//{ name: "John", avgNote: 4 }.
//If student has no notes (an empty array) then let's assume avgNote: 0.
// Examples:
// [
//   { name: "John", notes: [3, 5, 4]}
// ]
// ➞
// [
//   { name: "John", avgNote: 4 }
// ]
function averageNotes(array) {
    var array1 = [];
    for (i = 0; i < array.length; i++) {
      var obj = {};
      var sum = 0;
      var average = 0;
      var studentNotes = array[i].notes;
      var studentName = array[i].name;
      // if (array[0].notes.length == 0) {
      //   average = 0; //ovo ne racuna kako treba
      // }
      for (j = 0; j < studentNotes.length; j++) {
        sum += studentNotes[j];
      }
      average = sum / studentNotes.length;
      obj = { name: studentName, notes: average };
      array1.push(obj);
    }
    return JSON.stringify(array1);
  }
  console.log(
    averageNotes([
      { name: "John", notes: [3, 5, 4] },
      { name: "Jimmy", notes: [3, 3, 3] },
    ])
  );
  // 8.	Given an object with students and the grades that they
  // made on the tests that they took, determine which student has
  // the best Test Average. The key will be the student's name and
  // the value will be an array of their grades. You will only have
  // to return the student's name. You do not need to return their
  // Test Average.
  // getBestStudent([{  name: ‘John’, grades: [100, 90, 80]},
  // {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John"
  // John's avg = 90
  // Bob's avg = 83.33
  function getBestStudent(array) {
    var array1 = [];
    for (i = 0; i < array.length; i++) {
      var obj = {};
      var sum = 0;
      var average = 0;
      var studentNotes = array[i].notes;
      var studentName = array[i].name;
      for (j = 0; j < studentNotes.length; j++) {
        sum += studentNotes[j];
      }
      average = sum / studentNotes.length;
      obj = { name: studentName, notes: average };
      array1.push(obj);
    }
    var bestStudent;
    for (k = 0; k < 1; k++) {
      var max = array1[0].notes;
      bestStudent = array1[0].name;
      for (l = 0; l < array1.length; l++) {
        if (array1[l].notes > max) {
          max = array1[l].notes;
          bestStudent = array1[l].name;
        } else continue;
      }
    }
    return bestStudent;
  }
  console.log(
    getBestStudent([
      { name: "John", notes: [3, 5, 4] },
      { name: "Jimmy", notes: [5, 3, 3] },
    ])
  );
  console.log(
    getBestStudent([
      { name: "John", notes: [3, 5, 4] },
      { name: "Jimmy", notes: [5, 5, 5] },
    ])
  );
  
