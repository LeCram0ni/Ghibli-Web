
let galleryImageWidth;
let output;

function getWidth(){
  galleryImageWidth = document.querySelector("body div.wrapper div img").width;
  return galleryImageWidth;
};

function updateWidth(event) {
  getWidth();
  output = galleryImageWidth;
  console.log(output);
};

/*
function start() {
  document.getElementById("toShift").style.transform = "translate("+"${output}"+"px, 0px)";
};
*/

window.addEventListener("load", updateWidth);
window.addEventListener("resize", updateWidth);

