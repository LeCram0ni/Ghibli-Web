
const galleryImageWidth = document.querySelector("body div.wrapper div img");
let output = document.querySelector(".size");

const updateWidth = (event) => {
  output.innerText = galleryImageWidth.width;
};

window.addEventListener("load", updateWidth);
window.addEventListener("resize", updateWidth);