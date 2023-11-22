// Déclaration et initialisation de la variable globale slideIndex
var slideIndex = 1;

// Fonction pour passer à la diapositive suivante ou précédente
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Fonction pour afficher la diapositive correspondante
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("site");
  
  // Vérification des limites de l'index de la diapositive
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }

  // Masquer toutes les diapositives
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Afficher la diapositive actuelle
  x[slideIndex - 1].style.display = "block";
}

/* Premier menu : disparition et affichage de texte */
var slideIndex = 1;
showDivs(slideIndex);

// Fonction pour passer à la diapositive suivante ou précédente (premier menu)
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Fonction pour afficher la diapositive correspondante (premier menu)
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("site");

  // Vérification des limites de l'index de la diapositive
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }

  // Masquer toutes les diapositives
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Afficher la diapositive actuelle
  x[slideIndex - 1].style.display = "block";
}

// Fonction pour ouvrir la navigation (menu latéral)
function openNav() {
  document.getElementById("MOI").style.width = "0%";
  patron();

  $.ajax({
    type: 'POST',
    url: 'index.php',
    data: { key: 'id' },
    success: function(response) {
      // Le code à exécuter en cas de succès de la requête
      console.log('Données envoyées avec succès !');
    },
    error: function(error) {
      // Le code à exécuter en cas d'erreur de la requête
      console.error('Erreur lors de l\'envoi des données :', error);
    }
  });
}


// Fonction pour jouer l'audio
function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

// Fonction pour afficher le texte progressivement avec un clignotement
function patron() {
  var message =
    "Bonjour ! Je suis Johnny, un passionné de développement web.<br> Avec une expertise dans les langages front-end tels que HTML,<br> CSS et JavaScript,je crée des interfaces interactives et esthétiques.<br> Mon dévouement à concevoir des expériences utilisateur exceptionnelles <br>et ma soif d'apprendre les dernières tendances du web me permettent<br> de réaliser des projets web captivants. Toujours prêt à relever<br> de nouveaux défis, je mets en œuvre des solutions créatives pour façonner<br> l'avenir du web. En tant que développeur web,<br> je suis convaincu que chaque ligne de code est une opportunité<br> d'innover et de repousser les limites. <br>Let's code and create together! 🚀";
  var msgCount = 1;
  var blinkCount = 0;
  var blinkFlg = 0;
  var timer1, timer2;
  var patronElement = document.getElementById("patron");

  // Fonction pour afficher le texte progressivement
  function textFunc() {
    patronElement.innerHTML = message.substring(0, msgCount);

    if (msgCount == message.length) {
      clearInterval(timer1);
      timer2 = setInterval(blinkFunc, 200);
    } else {
      msgCount++;
    }
  }

  // Fonction pour clignoter le texte
  function blinkFunc() {
    if (blinkCount < 6) {
      if (blinkFlg == 0) {
        patronElement.innerHTML = message;
        blinkFlg = 1;
        blinkCount++;
      } else {
        patronElement.innerHTML = "";
        blinkFlg = 0;
      }
    } else {
      clearInterval(timer2);
    }
  }

  timer1 = setInterval(textFunc, 13);
}

/* Flèche */
let arrow = document.querySelector('.arrow-example');

// Toggle de la classe pour cacher ou montrer la flèche
setInterval(() => {
  arrow.classList.toggle('-hidden');
}, 1000);

/* Menu du bas */
document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('openButton');
  const menu = document.getElementById('menu');
  const close = document.getElementById('close');

  // Écouteur d'événement pour ouvrir le menu
  openButton.addEventListener('click', () => {
    menu.style.bottom = '0';
  });

  // Écouteur d'événement pour fermer le menu
  close.addEventListener('click', () => {
    menu.style.bottom = '-100vh';
  });
});
