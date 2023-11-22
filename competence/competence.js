// Mettre à jour les barres de progression toutes les 100 millisecondes
setInterval(update, 100);

function update() {
  // Récupérer les éléments de barre de progression
  var element1 = document.getElementById("progress-bar1");
  var element2 = document.getElementById("progress-bar2");
  var element3 = document.getElementById("progress-bar3");
  var element4 = document.getElementById("progress-bar4");
  var element5 = document.getElementById("progress-bar5");

  // Récupérer la largeur actuelle des barres de progression ou utiliser 1 par défaut
  var width1 = parseInt(element1.style.width) || 1;
  var width2 = parseInt(element2.style.width) || 1;
  var width3 = parseInt(element3.style.width) || 1;
  var width4 = parseInt(element4.style.width) || 1;
  var width5 = parseInt(element5.style.width) || 1;

  // Fonction pour la première barre de progression
  function scene1() {
    if (width1 >= 50) {
      clearInterval(identity1); // Arrêter l'animation lorsque la barre atteint 50%
    } else {
      width1++;
      element1.style.width = width1 + '%';
      element1.innerHTML = width1 + '%';
    }
  }

  // Fonction pour la deuxième barre de progression
  function scene2() {
    if (width2 >= 80) {
      clearInterval(identity2); // Arrêter l'animation lorsque la barre atteint 80%
    } else {
      width2++;
      element2.style.width = width2 + '%';
      element2.innerHTML = width2 + '%';
    }
  }

  // Fonction pour la troisième barre de progression
  function scene3() {
    if (width3 >= 10) {
      clearInterval(identity3); // Arrêter l'animation lorsque la barre atteint 10%
    } else {
      width3++;
      element3.style.width = width3 + '%';
      element3.innerHTML = width3 + '%';
    }
  }

  // Fonction pour la quatrième barre de progression
  function scene4() {
    if (width4 >= 50) {
      clearInterval(identity4); // Arrêter l'animation lorsque la barre atteint 50%
    } else {
      width4++;
      element4.style.width = width4 + '%';
      element4.innerHTML = width4 + '%';
    }
  }

  // Fonction pour la cinquième barre de progression
  function scene5() {
    if (width5 >= 25) {
      clearInterval(identity5); // Arrêter l'animation lorsque la barre atteint 25%
    } else {
      width5++;
      element5.style.width = width5 + '%';
      element5.innerHTML = width5 + '%';
    }
  }

  // Lancer les animations pour chaque barre de progression
  var identity1 = setInterval(scene1, 10);
  var identity2 = setInterval(scene2, 10);
  var identity3 = setInterval(scene3, 10);
  var identity4 = setInterval(scene4, 10);
  var identity5 = setInterval(scene5, 10);
}

// Mettre à jour la barre de progression 6
setInterval(scene6, 10);

var element6 = document.getElementById("progress-bar6");
var width6 = parseInt(element6.style.width) || 1;

function scene6() {
  if (width6 >= 25) {
    clearInterval(identity5); // Arrêter l'animation lorsque la barre atteint 25%
  } else {
    width6++;
    element6.style.width = width6 + '%';
    element6.innerHTML = width6 + '%';
  }
}
