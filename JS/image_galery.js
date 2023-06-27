var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");

for (var i = 1; i < 6; i++) {
  var newImage = document.createElement("img");
  var imagePath = "../images/galery_images/pic" + i + ".jpg";
  newImage.setAttribute("src", imagePath);

  newImage.addEventListener("click", function (event) {
    var clickedImage = event.target;
    displayedImage.setAttribute("src", clickedImage.getAttribute("src"));
  });

  thumbBar.appendChild(newImage);
}

btn.addEventListener("click", function () {
  var btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,1)";
    displayedImage.style.opacity = "0.5";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    displayedImage.style.opacity = "1";
  }
});
