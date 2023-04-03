"use strict";

const imgLink = [
  "./beach/download.jpg",
  "./beach/images (1).jpg",
  "./beach/images.jpg",
  "./beach/istockphoto-1360554439-170667a.jpg",
  "./beach/istockphoto-512185897-170667a.jpg",
  "./beach/istockphoto-955765580-170667a.jpg",
  "./beach/ryfRVh.webp",
];
$(imgLink).each(function (i, imgLink) {
  let img = $("<img/>");
  $(img).attr("src", imgLink);
  let height = Math.floor(Math.random() * (450 - 200 + 1)) + 200;
  let width = Math.floor(Math.random() * (450 - 100 + 1)) + 100;
  $(img).css("width", width + "px");
  $(img).css("height", height + "px");

  $("body").append(img);
});

let title = $("<h1>Images Of Beaches </h1>");
$("body").prepend(title);

$("img").each(function (i, img) {
  let width = parseInt($(this).css("width"));
  console.log(width);
  if (width < 200) {
    $(img).css("border", "5px solid black");
  } else return false;
});
