var greeting = function () {
  var welcomeMessage = "Hello World!";
  console.log(welcomeMessage);
};
greeting();

//window.navigator
//Create a function that prints out in the console the following information
//●	the platform on which the browser is running
//●	the information about the browser version
//●	the company that created that browser
//Each piece of information should be printed out in a new row.

//Create new “isOnline” function that checks if the browser is online.
//It should print out “online” when the browser is online and “offline” when there is no Internet connection.
function printOutInfo() {
  console.log(`The platform on which the browser is running: ${window.navigator.userAgentData.platform}\n
    the information about the browser version:${window.navigator.userAgentData.brands[2].version}\n 
    the company that created that browser: ${window.navigator.vendor}`);
}
printOutInfo();

function isOnline() {
  if (window.navigator.onLine) {
    console.log("online");
  } else {
    console.log("offline");
  }
}
isOnline();
//window.screen
//Create a function that prints out the following
// information in the console:
//●	current browser width and height
//●	max possible browser height
function printInformation() {
  console.log(
    `Current browser width and height: ${window.innerWidth}*${window.innerHeight}, max possible browser height ${window.screen.height}`
  );
}
printInformation();

//window.location
//Write a function that prints out website’s url information in the console:
//●	full url address
//●	domain name
//●	used protocol
//●	parameters which are part of URL.
//Create a function for reloading the page.
//Create a function that redirects you to a website address passed to it.
//Test all three functions
function websiteInformation() {
  console.log(
    `Full url address: ${window.location.href}, domain name: ${window.location.hostname}, used protocol: ${window.location.protocol}, parameters which are part of URL: ${window.location.search}`
  );
}
websiteInformation();

const reloadPage = function () {
  window.location.reload();
};
document.querySelector(".reload").addEventListener("click", reloadPage);

function redirectToWebsite(page) {
  window.location.href = page;
}
document.querySelector(".redirect").addEventListener("click", function () {
  redirectToWebsite("http://stackoverflow.com");
});

//window.localStorage
//Create a function that stores passed data in the browser local storage.
//Create a function that reads the stored data, and print it out in console.
//If there is no data, print "There is no data" in the console.
//Create a function that removes data from the local storage.

//Use the previously created functions to store/read/remove some data.
//Then add some data in storage and close the browser.
//Open the browser again on the same page and use the function to read the stored value.

//Modify functions to work with sessionStorage instead of localStorage.
//Try same scenario as with localStorage to examine data livecycle.
var setLocalStorage = function (key, value) {
  window.localStorage.setItem(key, value);
};
var getLocalStorage = function (key) {
  var localStorageData = window.localStorage.getItem(key);
  if (localStorageData) console.log(localStorageData);
  else console.log("No data");
};
var clearLocalStorage = function () {
  window.localStorage.clear();
};
setLocalStorage("lastName", "Drobnjak");
getLocalStorage("lastName");
clearLocalStorage();

var setSessionStorage = function (key, value) {
  window.sessionStorage.setItem(key, value);
};
var getSessionStorage = function (key) {
  var sessionStorageData = window.localStorage.getItem(key);
  if (sessionStorageData) console.log(sessionStorageData);
  else console.log("No data");
};
var clearSessionStorage = function () {
  window.sessionStorage.clear();
};
setSessionStorage("name", "Milos");
getSessionStorage("name");
clearSessionStorage();

//window.history
//Play around with the browser forward/back navigation.
//Implement a function that navigates two pages back.

var goOnePageBack = function () {
  window.history.back(1);
};
document.querySelector(".back").addEventListener("click", goOnePageBack);

//Window Methods
//●	Create a function that shows the user a greeting message using alert
//●	Then a question is presented to the user using prompt
//●	When the user provides the answer, that answer is used in the confirm dialog
//●	The format of the message in the dialog should be: "We will submit this answer now! " + the answer
//●	If the user clicks OK, show alert with success message
//●	If the user clicks Cancel, don't show anything
const message = function () {
  alert("Hello!");
};
const question = function () {
  let answer = "";
  do {
    answer = prompt("How can we hellp you?");
  } while (!answer);

  return answer;
};
const confirmMessage = function (userAnswer) {
  const confirmed = confirm(`Submit answer: ${userAnswer}`);
  if (confirmed) alert("Submited successfully!");
};
const messageToUser = function () {
  message();
  const userAnswer = question();
  confirmMessage(userAnswer);
};
document.querySelector(".alert").addEventListener("click", messageToUser);
//Global JavaScript Objects (homework)

//Math
//●	Random
//Create a function that builds an array of 10 random numbers between 1 and 50.
//The function prints that array out in the console and then returns it.

function createArray() {
  var array1 = [];
  for (i = 0; i < 10; i++) {
    array1.push(Math.random() * 50 + 1);
  }
  return array1;
}
console.log(createArray());
//●	Round
//Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
//Print out the modified array in the console.
//Use the first function for generating the input array.

function roundsElementsToTwoDecimals(array) {
  var array1 = [];
  for (i = 0; i < array.length; i++) {
    array1[i] = Math.round(array[i] * 100) / 100;
  }
  console.log(array1);
  return array1;
}
var array2 = createArray();
roundsElementsToTwoDecimals(array2);

//●	Floor
//Create a function that uses the passed array of
//numbers and rounds all its elements to the nearest
// integer.
//Print out the modified array in the console.
//Use the first function for generating the input array.
function roundsElementsToNearest(array) {
  var array1 = [];
  for (i = 0; i < array.length; i++) {
    array1[i] = Math.floor(array[i]);
  }
  return array1;
}
var array3 = createArray();
console.log(roundsElementsToNearest(array3));
//●	Max
//Create a function that finds and prints out
// the biggest element in the passed array of
//numbers.
function printOutBiggestElement(array) {
  console.log(
    `The biggest element in the passed array of numbers is: ${Math.max(
      ...array
    )}`
  );
}
printOutBiggestElement([1, 2, 5, 3, 4]);
//Date
//●	Print out the whole date object in the console.
//●	Print out the current time in the console.
//●	Print out the current date in the console.


function getDate() {
  var today =  new Date();
  return today
}
console.log(getDate());

function curentTime() {
  var hour = (new Date()).getHours()
  var minutes = (new Date()).getMinutes()
  return `Curent time: ${hour}:${minutes}`
}
console.log(curentTime());

function currentDate() {
  var day = (new Date()).getDate();
  var month = (new Date()).getMonth();
  var year = (new Date()).getFullYear()
  return `Current Date: ${day}.${month+1}.${year}.`
}
console.log(currentDate());
