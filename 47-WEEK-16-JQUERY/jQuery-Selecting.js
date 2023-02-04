"use strict";
// Intro
// Create a page that is using the jQuery library
// Print ‘Hello, world!’ in console when DOM loads

// Selecting
// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements

// Select the first element of the list and give it a bottom border

// Select all list elements and transform their text to uppercase

// Select active element of the list and change its font color

// Find the middle one and change its background color
$(function () {
  console.log("Hello World!");
});

$("li:eq(0)").css("border-bottom", "5px solid darkorange");

$("li").css("text-transform", "uppercase");

let active = document.activeElement;
$(active).css("color", "red");

const middleLiItem =
  document.querySelectorAll("li")[
    Math.floor(document.querySelectorAll("li").length / 2)
  ];
$(middleLiItem).css("background-color", "darkred");
