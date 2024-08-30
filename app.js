let isAnimating = false;

function start() {
  $("#toShift > img:nth-child(1)").on("click", handleLeftClick);
  $("#toShift > img:nth-child(3)").on("click", handleRightClick);
}

function handleLeftClick() {
  if (isAnimating) return;
  isAnimating = true;

  const $carousel = $(".carousel");
  const imgWidth = $(".carousel img:first-child").width();

  // Stop animations and reset the carousel position
  $carousel.stop(true, true);
  
  // Move the last image to the beginning
  $carousel.find("img:last-child").prependTo($carousel);

  // Set carousel to the position immediately after the last image is prepended
  $carousel.css("left", "-" + imgWidth + "px");

  // Animate to original position
  $carousel.animate({ left: 0 }, 300, "swing", function () {
    isAnimating = false;
    updateFilters();
    updateEventHandlers();
  });
}

function handleRightClick() {
  if (isAnimating) return;
  isAnimating = true;

  const $carousel = $(".carousel");
  const imgWidth = $(".carousel img:first-child").width();

  // Stop animations and reset the carousel position
  $carousel.stop(true, true);

  // Animate to the left
  $carousel.animate({ left: "-" + imgWidth + "px" }, 300, "swing", function () {
    // Move the first image to the end
    $carousel.find("img:first-child").appendTo($carousel);

    // Reset carousel position
    $carousel.css("left", 0);
    
    isAnimating = false;
    updateFilters();
    updateEventHandlers();
  });
}

function updateFilters() {
  const $carousel = $(".carousel img");
  $carousel.css("filter", "brightness(50%)"); // Set all images to default brightness
  $carousel.eq(1).css("filter", "brightness(100%)"); // Highlight the central image
}

function updateEventHandlers() {
  $("#toShift > img").off("click");
  $("#toShift > img:nth-child(1)").on("click", handleLeftClick);
  $("#toShift > img:nth-child(3)").on("click", handleRightClick);
}

// Initialize on document ready
$(document).ready(function () {
  start();
  updateFilters(); // Initialize the filter state
});
