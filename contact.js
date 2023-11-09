// Bloquer l'entrée
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
      event.preventDefault(); // Empêche l'action par défaut de la touche "Entrée"
      return false;
  }
}, true); // "true" => phase de capture

// Fonction pour passer automatiquement au champ suivant
function suivant(jeu, suivant, limite) {
  if (jeu.value.length == limite) {
      var nextInput = jeu.nextElementSibling;
      if (nextInput && nextInput.tagName.toLowerCase() === "input") {
          nextInput.focus(); // Met le focus sur le champ suivant
      }
  }
}

//
function suivant(input, targetId, maxLength) {
  var inputValue = input.value;
  var target = document.getElementById(targetId);

  if (inputValue.length <= maxLength) {
      // Ajoutez chaque lettre une par une avec un délai
      for (var i = 0; i < inputValue.length; i++) {
          setTimeout(function (index) {
              return function () {
                  target.innerHTML = inputValue.substring(0, index + 1);

                  // Désactiver le soulignement pour les caractères espacés
                  if (inputValue[index] === ' ') {
                      input.classList.add('no-underline');
                  } else {
                      input.classList.remove('no-underline');
                  }
              };
          }(i), i * 500); // Ajustez la durée du délai (en millisecondes) selon vos besoins
      }
  }
}

