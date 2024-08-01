let isAnimating = false;

function start() {
  // Initiale Event-Handler Zuweisung
  $("#toShift > img:nth-child(1)").on("click", () => handleClick("left"));
  $("#toShift > img:nth-child(3)").on("click", () => handleClick("right"));
}

function handleClick(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const $carousel = $(".carousel");
  const imgWidth = $(".carousel img:first-child").width();

  // Stoppe alle laufenden Animationen
  $carousel.stop(true, true);

  if (direction === "left") {
    // Verschiebe das letzte Bild an den Anfang und setze die Position auf -imgWidth
    $carousel.find("img:last-child").prependTo($carousel);
    $carousel.css("left", "-" + imgWidth + "px");

    // Animation zurück zur Ausgangsposition (0)
    $carousel.animate({ left: 0 }, 300, "swing", function () {
      isAnimating = false;
      updateEventHandlers();
    });
  } else {
    // Animation nach links, um das erste Bild aus dem Sichtbereich zu schieben
    $carousel.animate({ left: "-" + imgWidth + "px" }, 300, "swing", function () {
      // Verschiebe das erste Bild ans Ende
      $carousel.find("img:first-child").appendTo($carousel);

      // Setze das Karussell sofort zurück auf die Ausgangsposition
      $carousel.css("left", 0);

      isAnimating = false;
      updateEventHandlers();
    });
  }
}

function updateEventHandlers() {
  // Entferne alle vorherigen Event-Handler
  $("#toShift > img").off("click");

  // Binde die neuen Event-Handler an die korrekten Bilder
  start();
}

// Event-Handler starten
$(document).ready(function () {
  start();
});
