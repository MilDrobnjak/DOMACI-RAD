"use strict";

let figlet = require("figlet");

//printing out all available fonts

console.log(figlet.fontsSync());

//creating font function

const createArtisticFont = function (
  inputString,
  font = "Caligraphy2",
  horLayout = "default",
  vertLayout = "default",
  width = 80,
  whitespace = true
) {
  return console.log(
    figlet.textSync(inputString, {
      font: font,
      horizontalLayout: horLayout,
      verticalLayout: vertLayout,
      width: width,
      whitespaceBreak: whitespace,
    })
  );
};

//options for layouts: "default", "full", "fitted", "controlled smushing", "universal smushing"

createArtisticFont("Cao!");

createArtisticFont(
  "This is in 3D!",
  "3D-ASCII",
  "universal smushing",
  "universal smushing",
  100,
  false
);

createArtisticFont(
  "Some text!",
  "Banner",
  undefined,
  "controlled smushing",
  100,
  false
);

createArtisticFont(
  "This is AMC Razor Font",
  "AMC Razor",
  "fitted",
  "fitted",
  80,
  true
);
