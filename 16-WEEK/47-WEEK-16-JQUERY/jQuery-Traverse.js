"use strict";

const imgLinks1 = [
  "./beach/download.jpg",
  "./beach/images (1).jpg",
  "./beach/images.jpg",
];

const imgLinks2 = [
  "./beach/istockphoto-1360554439-170667a.jpg",
  "./beach/istockphoto-512185897-170667a.jpg",
  "./beach/istockphoto-955765580-170667a.jpg",
];

for (let j = 0; j < 2; j++) {
  var div = $("<div></div>");
  $(div).css("margin", "auto");
  $(div).css("display", "flex");
  $(div).css("max-width", "1800px");
  $(div).css("margin-top", "50px");
  $("body").append(div);

  $(j == 0 ? imgLinks1 : imgLinks2).each(function (i, imgLink) {
    let img = $("<img/>");
    $(img).attr("src", imgLink);
    $(img).css("max-width", "600px");
    $(div).append(img);
  });
}

let secondImgFirstDiv = $("div:first").children()[1];
$(secondImgFirstDiv).addClass("selected");
$(".selected").css("border", "15px solid red");

let borderChanged = false;

const changeBorders = function () {
  let secondImgSecondDiv = $(secondImgFirstDiv).parent().next().children()[1];

  $(".selected").css("border", "unset");

  $(borderChanged ? secondImgSecondDiv : secondImgFirstDiv).removeClass(
    "selected"
  );
  $(borderChanged ? secondImgFirstDiv : secondImgSecondDiv).addClass(
    "selected"
  );
  $(".selected").css("border", "15px solid red");
  borderChanged = !borderChanged;
};

let section = $("<section>");

let text = $("<h1>Press this button to switch picture borders</h1>");
$(text).css({
  "max-width": "fit-content",
  margin: "auto",
  "margin-bottom": "20px",
  "margin-top": "20",
  "font-size": "40px",
  color: "orange",
});

$(section).append(text);

let button = $("<button type='submit'>Click here</button>");
$(button).css({
  "max-width": "150px",
  padding: "10px",
  "font-size": "20px",
  margin: "auto",
  "border-radius": "8px",
  color: "white",
  "font-weight": "border",
  "background-color": "red",
});
$(button).on("click", changeBorders);
$(section).append(button);

$(section).css({
  margin: "auto",
  display: "flex",
  "flex-direction": "column",
  "justify-contetn": "center",
});

$("body").prepend(section)
$("body").css("background-color", "aqua")