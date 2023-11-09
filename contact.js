//bloquer entrée
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  }, true); // "true" => phase de capture

  //changer auto input
  function suivant(jeu, suivant, limite) {
    if (jeu.value.length == limite) {
        var nextInput = jeu.nextElementSibling;
        if (nextInput && nextInput.tagName.toLowerCase() === "input") {
            nextInput.focus();
        }
    }
}