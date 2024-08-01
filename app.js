window.onload = start;

/* jquery $ */

let isAnimating = false;

function start() {
  // Initiale Event-Handler Zuweisung
  $("#toShift > img:nth-child(1)").on("click", handleLeftClick);
  $("#toShift > img:nth-child(3)").on("click", handleRightClick);
}

function handleLeftClick() {
  if (isAnimating) return;
  isAnimating = true;

  const $carousel = $(".carousel");
  const imgWidth = $(".carousel img:first-child").width();

  // Stoppe alle laufenden Animationen und setze die Karussell-Position zurück
  $carousel.stop(true, true);

  // Verschiebe das letzte Bild an den Anfang
  $carousel.find("img:last-child").prependTo($carousel);

  // Setze das Karussell sofort nach links
  $carousel.css("left", "-" + imgWidth + "px");

  // Animation zurück zur Ausgangsposition
  $carousel.animate({ left: 0 }, 300, "swing", function () {
    setTimeout(function () {
      isAnimating = false;
    }, 500);
    // Aktualisiere die Event-Handler
    updateEventHandlers();
  });
}

function handleRightClick() {
  if (isAnimating) return;
  isAnimating = true;

  const $carousel = $(".carousel");
  const imgWidth = $(".carousel img:first-child").width();

  // Stoppe alle laufenden Animationen und setze die Karussell-Position zurück
  $carousel.stop(true, true);

  // Verschiebe das Karussell nach links
  $carousel.animate({ left: "-" + imgWidth + "px" }, 300, "swing", function () {
    // Verschiebe das erste Bild ans Ende
    $carousel.find("img:first-child").appendTo($carousel);

    // Setze das Karussell zurück
    $carousel.css("left", 0);

    setTimeout(function () {
      isAnimating = false;
    }, 500);

    // Aktualisiere die Event-Handler
    updateEventHandlers();
  });
}

function updateEventHandlers() {
  // Entferne alle vorherigen Event-Handler
  $("#toShift > img").off("click");

  // Binde die neuen Event-Handler an die korrekten Bilder
  $("#toShift > img:nth-child(1)").on("click", handleLeftClick);
  $("#toShift > img:nth-child(3)").on("click", handleRightClick);
}

// Event-Handler starten
$(document).ready(function () {
  start();
});
