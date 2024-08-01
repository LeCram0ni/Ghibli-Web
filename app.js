
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

window.onload = start;

function start() {
  
  $("#left-button").on("click", handleLeftClick);
  $("#right-button").on("click", handleRightClick);
}
 

function handleLeftClick() {
    $("#left-button").off("click");
    $(".carousel").animate({
      left: "-" + "${output}" + "px"
    },400,"swing", function complete(){
      $(".carousel img:first-child").appendTo($(".carousel"));
      $(".gcarousel").css("left", "0");
      $("#left-button").on("click", handleLeftClick);
    });
}

function handleRightClick() {
  $("#right-button").off("click");
    $(".carousel img:last-child").prependTo($(".carousel"));
    $(".carousel").css("left", "-" + $(".carousel img:first-child").width() + "px");
    $(".carousel").animate({
      left: 0
    },400,"swing", function complete(){
      $("#right-button").on("click", handleRightClick);
    });  
}