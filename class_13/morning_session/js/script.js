var btnElement = document.getElementById("btn");

btnElement.onclick = function () {
  document.getElementById("heading").innerText =
    "Currently Learning Javascript...";
};

var mainImage = document.getElementById("mainImage");
var imgOne = document.getElementById("img1");

imgOne.onclick = function () {
  var imgUrl = imgOne.getAttribute("src");
  mainImage.setAttribute("src", imgUrl);
};

var imgTwo = document.getElementById("img2");

imgTwo.onclick = function () {
  var imgUrl = imgTwo.getAttribute("src");
  mainImage.setAttribute("src", imgUrl);
};

var imgThree = document.getElementById("img3");

imgThree.onclick = function () {
  var imgUrl = imgThree.getAttribute("src");
  mainImage.setAttribute("src", imgUrl);
};

var imgFour = document.getElementById("img4");

imgFour.onclick = function () {
  var imgUrl = imgFour.getAttribute("src");
  mainImage.setAttribute("src", imgUrl);
};
