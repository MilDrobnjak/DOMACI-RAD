// 1.	Write a program that shows text representation
// of a day in a week for a number input from 1 to 7.
// Print output in console.
// For input 1, output should be “Monday”.
var input = 3;
var result = "";
switch (input) {
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Tuesday;";
    break;
  case 3:
    result = "Wednesday";
    break;
  case 4:
    result = "Thursday";
    break;
  case 5:
    result = "Friday";
    break;
  case 6:
    result = "Saturday";
    break;
  case 7:
    result = "Sunday";
    break;
}
console.log("Today is " + result);

// 2.	Write a program that shows text representation
// of a day in a week for a number input from 1 to 7.
// All other cases output a message explaining that input must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.
var input1 = 6;
var result1 = "";
switch (input1) {
  case 1:
    result1 = "Monday";
    break;
  case 2:
    result1 = "Tuesday";
    break;
  case 3:
    result1 = "Wednesday";
    break;
  case 4:
    result1 = "Thursday";
    break;
  case 5:
    result1 = "Friday";
    break;
  case 6:
    result1 = "Saturday";
    break;
  case 7:
    result1 = "Sunday";
  default:
    result1 = "Input must be a number between 1 and 7";
    break;
}
console.log(result1);

// 3.Write a program that for a 1-7 number input
// (representing a day in a week)
// shows if that day is a weekday or weekend.
// All other cases output a message explaining that input must be a number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.
var input2 = 1;
var result2 = "";
switch (input2) {
  case 1:
    result2 = "Today is Monday. It's weekday.";
    break;
  case 2:
    result2 = "Today is Tuesday. It's weekday.";
    break;
  case 3:
    result2 = "Today is Wednesday. It's weekday.";
    break;
  case 4:
    result2 = "Today is Thursday. It's weekday.";
    break;
  case 5:
    result2 = "Today is Friday. It's weekday.";
    break;
  case 6:
    result2 = "Today is Saturday.It's weekend.";
    break;
  case 7:
    result2 = "Today is Sunday.It's weekend.";
  default:
    result2 = "Input must be a number between 1 and 7";
    break;
}
console.log(result2);

// 4.	Write a program that for a 1-12 number input
// (representing a month in a year) shows that month’s name.
// All other cases output a message explaining that input must be a number between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.
var input3 = 6;
var result3 = "";
switch (input3) {
  case 1:
    result3 = "January";
    break;
  case 2:
    result3 = "February";
    break;
  case 3:
    result3 = "March";
    break;
  case 4:
    result3 = "April";
    break;
  case 5:
    result3 = "May";
    break;
  case 6:
    result3 = "June";
    break;
  case 7:
    result3 = "July";
  case 8:
    result3 = "August";
    break;
  case 9:
    result3 = "September";
    break;
  case 10:
    result3 = "October";
    break;
  case 11:
    result3 = "November";
    break;
  case 12:
    result3 = "December";
    break;
  default:
    result3 = "Input must be a number between 1 and 12";
    break;
}
console.log(result3);

// 5.	Write a program that for a 1-12 number input
// (representing a month in a year) shows what season it is.
// All inputs different from 1-12 output a message explaining
// that input must be a number between 1 and 12.

var input4 = 1;
var result4 = "";
switch (input4) {
  case 1:
    result4 = "winter";
    break;
  case 2:
    result4 = "winter";
    break;
  case 3:
    result4 = "spring";
    break;
  case 4:
    result4 = "spring";
    break;
  case 5:
    result4 = "spring";
    break;
  case 6:
    result4 = "summer";
    break;
  case 7:
    result4 = "summer";
  case 8:
    result4 = "summer";
    break;
  case 9:
    result4 = "autumn";
    break;
  case 10:
    result4 = "autumn";
    break;
  case 11:
    result4 = "autumn";
    break;
  case 12:
    result4 = "winter";
    break;
  default:
    result4 = "Input must be a number between 1 and 12";
    break;
}
console.log(result4);

//6. Zadatak
var i = "A";
var rez = "";
switch (i) {
  case "A":
    rez = "Good job";
    break;
  case "B":
    rez = "Pretty good";
    break;
  case "C":
    rez = "Passed";
    break;
  case "D":
    rez = "Not so good";
    break;
  case "F":
    rez = "Failed";
    break;
  default:
    rez = "Unknown grade";
    break;
}
console.log(rez);

//7. Zadatak
var city = "Segedin";
var country = "";
switch (city) {
  case "Beograd":
    country = "Srbija";
    break;
  case "Novi Sad":
    country = "Srbija";
    break;
  case "Nis":
    country = "Srbija";
    break;
  case "Subotica":
    country = "Srbija";
    break;
  case "Leskovac":
    country = "Srbija";
    break;
  case "Zagreb":
    country = "Hrvatska";
    break;
  case "Vukovar":
    country = "Hrvatska";
    break;
  case "Split":
    country = "Hrvatska";
    break;
  case "Pula":
    country = "Hrvatska";
    break;
  case "Dubrovnik":
    country = "Hrvatska";
    break;
  case "Karlovac":
    country = "Hrvatska";
    break;
  case "Budimpesa":
    country = "Madjarska";
    break;
  case "Segedin":
    country = "Madjarska";
    break;
  case "Baja":
    country = "Madjarska";
    break;
  default:
    country = "Please choose a different city";
    break;
}
console.log(country);

//8. zadatak
var w = 10;
var q = 2;
var operation = "*";
switch (operation) {
  case "+":
    operation = w + q;
    break;
  case "-":
    operation = w - q;
    break;
  case "*":
    operation = w * q;
    break;
  case "/":
    operation = w / q;
    break;
  default:
    operation = "a number divisible by 0 is always 0";
    break;
}
console.log(operation);
