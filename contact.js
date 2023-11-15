
// Attendez que le DOM soit entièrement chargé avant d'attacher des écouteurs d'événements
document.addEventListener("DOMContentLoaded", function () {
    // Attachez une fonction pour changer l'input lorsqu'on clique sur le bouton "valider"
    document.getElementById("valider").addEventListener("click", changerInput);

    // Empêchez la soumission du formulaire lorsqu'on appuie sur la touche "Enter"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }, true);
});




// État initial du formulaire : attend un prénom
var etatFormulaire = "prenom";

// Fonction principale pour changer l'input en fonction de l'état actuel
function changerInput() {
    // Obtenez l'élément input actuel
    var inputActuel;

    if (etatFormulaire === "prenom") {
        inputActuel = document.getElementsByName("prenom")[0];
        changerInputPrenom(inputActuel);
    } else if (etatFormulaire === "nom") {
        inputActuel = document.getElementsByName("nom")[0];
        changerInputNom(inputActuel);
    } else if (etatFormulaire === "email") {
    }
}

// Fonction spécifique pour changer de l'état "prenom" à "nom"
function changerInputPrenom(inputActuel) {
    changerInputGenerique(inputActuel, "text", "nom", "votre nom",);
    // Vous pouvez ajouter des actions supplémentaires si nécessaire
}

// Fonction spécifique pour changer de l'état "nom" à "email"
function changerInputNom(inputActuel) {
    changerInputGenerique(inputActuel, "email", "email", "votre e-mail",);
    // Vous pouvez ajouter des actions supplémentaires si nécessaire
}

// Fonction générique pour le changement d'input
function changerInputGenerique(inputActuel, type, inputSuivant, labelSuivant,) {
    // Vérifiez si l'élément actuel a été trouvé
    if (!inputActuel) {
        console.error("L'élément n'a pas été trouvé.");
        return;
    }

    // Vérifiez si la valeur de l'input actuel est valide
    if (inputActuel.value.trim() !== "") {
        // Créez un nouvel input pour le type suivant
        var nouvelInput = document.createElement("input");
        nouvelInput.type = type;
        nouvelInput.id = inputSuivant;
        nouvelInput.name = inputSuivant;
        nouvelInput.maxLength = 25; // Mettez à jour la longueur maximale au besoin
        nouvelInput.size = 20; // Mettez à jour la taille au besoin
     
    

        // Remplacez l'input actuel par le nouvel input
        inputActuel.parentNode.replaceChild(nouvelInput, inputActuel);

        // Mettez à jour le label de l'input actuel pour indiquer le changement
        var labelActuel = document.querySelector('label[for="' + inputActuel.id + '"]');
        if (labelActuel) {
            labelActuel.textContent = "Veuillez entrer " + labelSuivant + " :";
            labelActuel.htmlFor = nouvelInput.id;
        }
        // Affichez et focussez sur le nouvel input
        nouvelInput.style.display = "block";
        nouvelInput.focus();

        // Mettez à jour l'état du formulaire
        etatFormulaire = inputSuivant;
    }
}


